import React from 'react';
import PropTypes from 'prop-types';
import * as emailValidator from 'email-validator';
import AWS from 'aws-sdk';
import uuidv4 from 'uuid/v4';

import UploadComponent from './UploadComponent';
import Spinner from "~components/Spinner";

const ACCESS_KEY_ID = 'AKIAIIML4EFZLZF2MHBQ';
const SECRET_ACCESS_KEY = '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';
const API_VERSION = '2006-03-01';
const BUCKET = ''; // nodejs-file-store
const REGION = ''; // us-east-2

const initialFormState = {
    name: '',
    email: '',
    number: '',
    description: '',
    file: '',
    fileName: '',
    nameError: false,
    emailError: false,
    numberError: false,
    isRequestFetching: false
};

class Form extends React.PureComponent {
  static propTypes = {
    onSendResponse: PropTypes.func.isRequired,
  };

  state = {...initialFormState};

  handleChangeName = ({ target: { value }}) => {
    this.setState({
      name: value,
    });
  };

  handleChangeEmail = ({ target: { value }}) => {
    this.setState({
      email: value,
    });
  };

  handleChangeNumber = ({ target: { value }}) => {
    this.setState({
      number: value,
    });
  };

  handleChangeDescription = ({ target: { value }}) => {
    this.setState({
      description: value,
    });
  };

  handleChangeFile = ({ target }) => {
    const { size, value, files } = target;
    const name = files[0].name;
    // const shortName = name.length > 32 ? `${name.slice(0, 30)}...` : name;

    if (size < 3001) {
      this.setState({
        file: value,
        fileName: name,
      });
    }
  };

  handleCancelFile = () => {
    this.setState({
      file: '',
      fileName: '',
    });
  };

  handleSendResponse = () => {
    const {
      name,
      email,
      number,
      file,
    } = this.state;
    const { onSendResponse } = this.props;
    const isNameValid = name && name.length > 0;
    const isEmailValid = email && email.length > 0 && emailValidator.validate(email);
    const isNumberValid = number && number.length > 0;

    if (!isNameValid) {
      this.setState(() => ({
        nameError: true,
      }));

     setTimeout(() => this.setState(() => ({ nameError: false, })), 5000);
    }

    if (!isEmailValid) {
      this.setState(() => ({
        emailError: true,
      }));

     setTimeout(() => this.setState(() => ({ emailError: false, })), 5000);
    }

    if (!isNumberValid) {
      this.setState(() => ({
        numberError: true,
      }));

      setTimeout(() => this.setState(() => ({ numberError: false, })), 5000);
    }

    if ([isNameValid, isEmailValid, isNumberValid].some(validity => !validity)) {
      return;
    }

    AWS.config.update({
      signatureVersion: 'v4',
      region: REGION,
      accessKeyId: ACCESS_KEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY
    });

    const s3 = new AWS.S3({
      apiVersion: API_VERSION
    });

    const bucketParams = {
      Bucket : BUCKET,
      Key: `${uuidv4()}/${file[0].name}`,
      Body: '',
      ACL: 'private',
      ContentType: file[0].headers['content-type'],
    };

    bucketParams.Body = file[0];

    s3.upload(bucketParams).promise()
      .then(data => {
        const url = process.env.S3 + data.key;

        const formData = this.buildForm(url);

        this.setState({
          ...this.state,
          isRequestFetching: true
        });

        fetch('https://usebasin.com/f/b3b27e6b544a', {
          method: 'POST',
          body: formData
        }).then(() => {
          onSendResponse('success');
          this.handleInitState();
        }).catch(() => {
          onSendResponse('error');
          this.handleInitState();
        });
      })
      .catch(error => {
        onSendResponse('error');
        this.handleInitState();
      });
  };

  handleInitState = () => {
    this.setState({...initialFormState});
  };

  buildForm = (url) => {
      const { name, email, number, description } = this.state;
      const formData = new FormData();

      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', number);
      formData.append('message', description);
      formData.append('file', url);

      return formData;
  };

  applyInvalidClass = (invalidity) => invalidity ? 'field-invalid' : '';

  render() {
    const {
      name,
      email,
      number,
      description,
      file,
      fileName,
      nameError,
      emailError,
      numberError,
      isRequestFetching
    } = this.state;

    return (
        <form acceptCharset="UTF-8">
            <Spinner isVisible={isRequestFetching} />

            <div className="form">
                <div className="form-title">Tell us about yourself</div>

                <div className="form-group">
                    <input
                        type="text"
                        name='name-surname'
                        className={this.applyInvalidClass(nameError)}
                        placeholder="Your Surname and Name"
                        value={name}
                        onChange={this.handleChangeName}
                    />
                </div>

                <div className="form-group">
                    <input
                        id='email'
                        type='text'
                        name='email'
                        className={this.applyInvalidClass(emailError)}
                        placeholder="Your E-mail"
                        value={email}
                        onChange={this.handleChangeEmail}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name='phone'
                        className={this.applyInvalidClass(numberError)}
                        placeholder="Your phone number"
                        value={number}
                        onChange={this.handleChangeNumber}
                    />
                </div>

                <textarea
                    placeholder="Accompanying letter"
                    name='letter'
                    value={description}
                    onChange={this.handleChangeDescription}
                />

                <UploadComponent
                    file={file}
                    fileName={fileName}
                    onChangeFile={this.handleChangeFile}
                    onCancelFile={this.handleCancelFile}
                />

                <div
                  onClick={this.handleSendResponse}
                  className='send-response flex-both-centered'
                >
                  send response
                </div>
            </div>
        </form>
    );
  }
}

export default Form;

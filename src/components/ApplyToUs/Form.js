import React from 'react';
import PropTypes from 'prop-types';
import * as emailValidator from 'email-validator';
import classNames from 'classnames';
import firebase from 'firebase';
import uuidv4 from 'uuid/v4';

import UploadComponent from './UploadComponent';
import Spinner from "~components/Spinner";

const config = {
  apiKey: "AIzaSyBKGAKnjuVU_s-FYWOprAkzEAAH8_QkuuY",
  authDomain: "remy-website.firebaseapp.com",
  databaseURL: "https://remy-website.firebaseio.com",
  projectId: "remy-website",
  storageBucket: "gs://remy-website.appspot.com",
  messagingSenderId: "520758660339"
};
firebase.initializeApp(config);

const initialFormState = {
    name: '',
    email: '',
    number: '',
    description: '',
    file: '',
    fileName: '',
    fileObject: null,
    nameError: false,
    emailError: false,
    numberError: false,
    fileError: false,
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

  handleChangeFile = (event) => {
    const { value, files } = event.target;
    const name = files[0].name;
    const size = files[0].size;

    if (size <= 3000000) {
      this.setState({
        file: value,
        fileObject: files[0],
        fileName: name,
      });
    } else {
        event.preventDefault();
        alert('Your CV exceeds the size of 3MB');
    }
  };

  handleCancelFile = () => {
    this.setState({
      file: '',
      fileObject: null,
      fileName: '',
    });
  };

  handleSendResponse = () => {
    const {
      name,
      email,
      number,
      fileObject,
      fileName,
    } = this.state;
    const { onSendResponse } = this.props;
    const isNameValid = name && name.length > 0;
    const isEmailValid = email && email.length > 0 && emailValidator.validate(email);
    const isNumberValid = number && number.length > 0;
    const isFileValid = fileName.length;

    if (!isNameValid) {
      this.setState(() => ({
        nameError: true,
      }));

     setTimeout(() => this.setState(() => ({ nameError: false })), 5000);
    }

    if (!isFileValid) {
        this.setState({
            fileError: true
        });

        setTimeout(() => this.setState({
            fileError: false
        }), 5000);
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

    if ([isNameValid, isEmailValid, isNumberValid, isFileValid].some(validity => !validity)) {
      return;
    }

    if (fileObject) {
      const storageRef = firebase.storage().ref();

      const uploadFile = storageRef.child(`${uuidv4()}-${fileName}`).put(fileObject);

      const self = this;

      self.setState({
        ...self.state,
        isRequestFetching: true
      });

      uploadFile.on(
        'state_changed',
        () => {},
        () => {
          onSendResponse('error');
          self.handleInitState();
        },
        () => {
          uploadFile.snapshot.ref.getDownloadURL().then((url) => {
            const formData = self.buildForm(url);

            fetch('https://usebasin.com/f/7ecab6057565', {
              method: 'POST',
              body: formData
            }).then(() => {
              onSendResponse('success');
              self.handleInitState();
            }).catch(() => {
              onSendResponse('error');
              self.handleInitState();
            });
          });
        }
      );
    }
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
      fileError,
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

                <div className={classNames('file-error-wrapper', { 'has-error': fileError })}>
                    <UploadComponent
                        file={file}
                        fileName={fileName}
                        onChangeFile={this.handleChangeFile}
                        onCancelFile={this.handleCancelFile}
                    />
                </div>

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

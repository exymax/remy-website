import React from 'react';
import PropTypes from 'prop-types';

import UploadComponent from './UploadComponent';

class Form extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    onChangeName: PropTypes.func.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onChangeNumber: PropTypes.func.isRequired,
    onChangeDescription: PropTypes.func.isRequired,
    onChangeFile: PropTypes.func.isRequired,
    onCancelFile: PropTypes.func.isRequired,
    onSendResponse: PropTypes.func.isRequired,
  };

  state = {
    nameError: false,
    emailError: false,
    numberError: false,
  };

  handleSendResponse = (e) => {
    const {
      name,
      email,
      number,
    } = this.props;
    const isNameValid = name && name.length > 0;
    const isEmailValid = email && email.length > 0;
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
      e.preventDefault();
    }
  };

  applyInvalidClass = (invalidity) => invalidity ? 'field-invalid' : '';

  render() {
    const {
      nameError,
      emailError,
      numberError,
    } = this.state;
    const {
      name,
      email,
      number,
      description,
      file,
      fileName,
      onChangeName,
      onChangeEmail,
      onChangeNumber,
      onChangeDescription,
      onChangeFile,
      onCancelFile,
    } = this.props;

    return (
        <form action="https://getform.org/u/8dc1963d-9ef3-4d11-97f3-cc29ffd97a8e" encType="multipart/form-data"
              method="POST" onSubmit={this.handleSendResponse}>
            <div className="form">
                <div className="form-title">Tell us about yourself</div>

                <div className="form-group">
                    <input
                        type="text"
                        name='name-surname'
                        className={this.applyInvalidClass(nameError)}
                        placeholder="Your Surname and Name"
                        value={name}
                        onChange={onChangeName}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name='email'
                        className={this.applyInvalidClass(emailError)}
                        placeholder="Your E-mail"
                        value={email}
                        onChange={onChangeEmail}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name='phone'
                        className={this.applyInvalidClass(numberError)}
                        placeholder="Your phone number"
                        value={number}
                        onChange={onChangeNumber}
                    />
                </div>

                <textarea
                    placeholder="Accompanying letter"
                    name='letter'
                    value={description}
                    onChange={onChangeDescription}
                />

                <UploadComponent
                    file={file}
                    fileName={fileName}
                    onChangeFile={onChangeFile}
                    onCancelFile={onCancelFile}
                />

                <input type='submit' className='send-response flex-both-centered' value='send response' />
            </div>
        </form>
    );
  }
}

export default Form;

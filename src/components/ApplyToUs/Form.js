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

  handleSendResponse = () => {
    const {
      name,
      email,
      number,
      onSendResponse,
    } = this.props;
    const isValidName = name && name.length > 0;
    const isValidEmail = email && email.length > 0;
    const isValidNumber = number && number.length > 0;

    if (!isValidName) {
      this.setState(() => ({
        nameError: true,
      }));

     setTimeout(() => this.setState(() => ({ nameError: false, })), 5000);
    }

    if (!isValidEmail) {
      this.setState(() => ({
        emailError: true,
      }));

     setTimeout(() => this.setState(() => ({ emailError: false, })), 5000);
    }

    if (!isValidNumber) {
      this.setState(() => ({
        numberError: true,
      }));

      setTimeout(() => this.setState(() => ({ numberError: false, })), 5000);
    }

    isValidName && isValidEmail && isValidNumber && onSendResponse();
  };

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
      <div className="form">
        <div className="form-title">Your response</div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Your Surname and Name"
            value={name}
            onChange={onChangeName}
          />
          {nameError && <div className="error">Fill your name and surname</div>}
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Your E-mail"
            value={email}
            onChange={onChangeEmail}
          />
          {emailError && <div className="error">Fill your e-mail. We could send usefull information to you.</div>}
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Your phone number"
            value={number}
            onChange={onChangeNumber}
          />
          {numberError && <div className="error">Fill the phone number. It’s necessary to contact with you</div>}
        </div>

        <textarea
          placeholder="Accompanying letter"
          value={description}
          onChange={onChangeDescription}
        />

        <UploadComponent
          file={file}
          fileName={fileName}
          onChangeFile={onChangeFile}
          onCancelFile={onCancelFile}
        />

        <div
          className="send-response flex-both-centered"
          onClick={this.handleSendResponse}
        >
          send response
        </div>
      </div>
    );
  }
}

export default Form;

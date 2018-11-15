import React from 'react';

import Popup from '~components/Popup';
import Task from './Task';
import Form from './Form';
import './styles.scss';

class ApplyToUs extends React.PureComponent {
  state = {
    step: 1,
    topValue: '',
    bottomValue: '',
    name: '',
    email: '',
    number: '',
    description: '',
    file: '',
    isOpen: false,
  };

  handleChangeTop = ({ target: { value }}) => {
    this.setState({
      topValue: value,
    });
  };

  handleChangeBottom = ({ target: { value }}) => {
    this.setState({
      bottomValue: value,
    });
  };

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

  handleChangeFile = ({ target: { value }}) => {
    this.setState({
      file: value,
    });
  };

  handleCancelFile = () => {
    this.setState({
      file: '',
    });
  };

  switchStep = () => {
    const {
      step,
      topValue,
      bottomValue,
      name,
      email,
      number,
      description,
      file,
    } = this.state;

    switch (step) {
      case 1:
        return (
          <Task
            topValue={topValue}
            bottomValue={bottomValue}
            onNextStep={this.handleNextStep}
            onChangeTop={this.handleChangeTop}
            onChangeBottom={this.handleChangeBottom}
          />
        );

      case 2:
        return (
          <Form
            name={name}
            email={email}
            number={number}
            description={description}
            file={file}
            onChangeName={this.handleChangeName}
            onChangeEmail={this.handleChangeEmail}
            onChangeNumber={this.handleChangeNumber}
            onChangeDescription={this.handleChangeDescription}
            onChangeFile={this.handleChangeFile}
            onCancelFile={this.handleCancelFile}
            onSendResponse={this.handleSendResponse}
          />
        );

      default:
        return null;
    }
  };

  handleNextStep = () => {
    this.setState({
      step: 2,
    });
  };

  handleSendResponse = () => {
    this.handleClosePopup();
  };

  handleOpenPopup = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleClosePopup = () => {
    this.setState({
      isOpen: false,
      step: 1,
    });
  };

  render() {
    const { isOpen } = this.state;
    const component = this.switchStep();

    return (
      <Popup
        button={(
          <div className="button">apply to us</div>
        )}
        onOpen={this.handleOpenPopup}
        onClose={this.handleClosePopup}
        isOpen={isOpen}
      >
        {component}
      </Popup>
    );
  }
}

export default ApplyToUs;

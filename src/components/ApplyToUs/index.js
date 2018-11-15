import React from 'react';

import Popup from '~components/Popup';
import Task from './Task';
import Form from './Form';
import './styles.scss';

class ApplyToUs extends React.PureComponent {
  state = {
    step: 1,
    topValue: null,
    bottomValue: null,
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

  switchStep = () => {
    const {
      step,
      topValue,
      bottomValue,
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
        return <Form />;

      default:
        return null;
    }
  };

  handleNextStep = () => {
    this.setState({
      step: 2,
    });
  };

  handleClose = () => {
    this.setState({
      step: 1,
    });
  };

  render() {
    const component = this.switchStep();

    return (
      <Popup
        button={(
          <div className="button">apply to us</div>
        )}
        onClose={this.handleClose}
      >
        {component}
      </Popup>
    );
  }
}

export default ApplyToUs;

import React from 'react';

import Popup from '~components/Popup';
import Task from './Task';
import Form from './Form';
import './styles.scss';

class ApplyToUs extends React.PureComponent {
  state = {
    step: 1,
  };

  switchStep = () => {
    const { step } = this.state;

    switch (step) {
      case 1:
        return <Task />;

      case 2:
        return <Form />;

      default:
        return null;
    }
  };

  render() {
    const component = this.switchStep();

    return (
      <Popup
        button={(
          <div className="button">apply to us</div>
        )}
      >
        {component}
      </Popup>
    );
  }
}

export default ApplyToUs;

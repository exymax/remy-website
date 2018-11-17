import React from 'react';
import PropTypes from 'prop-types';

class Submission extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    onApply: PropTypes.func.isRequired,
  };

  getConfirmContent = () => {
      const { type } = this.props;
      const messages = {
          success: 'Successfully sent',
          error: 'Form submission failed. Please try again'
      };

      return messages.hasOwnProperty(type) ? messages[type] : null;
  };

  render() {
    const { onApply } = this.props;

    return (
    <div className="submission">
      <div className="submission-title">CV Submission</div>

      <div className="submission-content">
          {this.getConfirmContent()}
      </div>

      <div
        onClick={onApply}
        className='submission-button flex-both-centered'
      >
        ok
      </div>
    </div>
    );
  }
}

export default Submission;

import React from 'react';
import PropTypes from 'prop-types';

class Submission extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    onApply: PropTypes.func.isRequired,
    onTryAgain: PropTypes.func.isRequired,
  };

  getConfirmContent = () => {
      const { type } = this.props;
      const messages = {
          success: 'Successfully sent',
          error: 'Form submission failed. Please try again'
      };

      return messages.hasOwnProperty(type) ? messages[type] : null;
  };

  getConfirmTitle = () => {
      const { type } = this.props;
      const messages = {
          success: 'Submission success',
          error: 'Submission failed'
      };

      return messages.hasOwnProperty(type) ? messages[type] : null;
  };

  render() {
    const {
      type,
      onApply,
      onTryAgain,
    } = this.props;

    return (
    <div className="submission">
      <div className="submission-title">{this.getConfirmTitle()}</div>

      <div className="submission-content">
          {this.getConfirmContent()}
      </div>

      <div
        onClick={onApply}
        className='submission-button flex-both-centered'
      >
        ok
      </div>

      {type === 'error' && (
        <div
          onClick={onTryAgain}
          className='submission-button flex-both-centered'
        >
          Try again
        </div>
      )}
    </div>
    );
  }
}

export default Submission;

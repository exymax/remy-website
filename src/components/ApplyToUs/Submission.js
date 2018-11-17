import React from 'react';
import PropTypes from 'prop-types';

class Submission extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    onApply: PropTypes.func.isRequired,
  };

  render() {
    const { type, onApply } = this.props;

    if (type === 'success') {
      return (
        <div className="submission">
          <div className="submission-title">Success CV Submission</div>

          <div className="submission-content flex-both-centered">
            Successfully sent
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

    if (type === 'error') {
      return (
        <div className="submission">
          <div className="submission-title">Fail CV Submission</div>

          <div className="submission-content flex-both-centered">
            Send failed. Please try again
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

    return null;
  }
}

export default Submission;

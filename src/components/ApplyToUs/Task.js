import React from 'react';
import PropTypes from 'prop-types';

import scheme from '~image/scheme.svg';
import answer from '~image/answer.svg';

class Task extends React.PureComponent {
  static propTypes = {
    topValue: PropTypes.string,
    bottomValue: PropTypes.string,
    onNextStep: PropTypes.func.isRequired,
    onChangeTop: PropTypes.func.isRequired,
    onChangeBottom: PropTypes.func.isRequired,
  };

  handleNextStep = () => {
    const {
      onNextStep,
      topValue,
      bottomValue,
    } = this.props;

    if (topValue && bottomValue && topValue > 0 && bottomValue > 0 ) {
      onNextStep();
    }
  };

  render() {
    const {
      topValue,
      bottomValue,
      onChangeTop,
      onChangeBottom,
    } = this.props;

    return (
      <div className="task">
        <div className="task-title">Answer the question</div>

        <div className="scheme">
          <img src={scheme} />
        </div>

        <div className="answer">
          <input
            type="text"
            className="input input-top"
            value={topValue}
            onChange={onChangeTop}
          />

          <img src={answer} />

          <input
            type="text"
            className="input input-bottom"
            value={bottomValue}
            onChange={onChangeBottom}
          />
        </div>

        <div
          className="answer-and-continue flex-both-centered"
          onClick={this.handleNextStep}
        >
          answer and continue
        </div>
      </div>
    );
  }
}

export default Task;

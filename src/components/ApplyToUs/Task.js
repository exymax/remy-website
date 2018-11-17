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

  state = {
    errorMessage: '',
    isError: false,
  };

  handleNextStep = () => {
    const {
      onNextStep,
      topValue,
      bottomValue,
    } = this.props;

    if (topValue && bottomValue) {
      const isValid = parseFloat(topValue) > 0 && parseFloat(bottomValue) > 0;

      if (isValid) {
        onNextStep();
      } else {
        this.setState({
          errorMessage: 'Your answer is wrong! Try again!',
          isError: true,
        });

        this.handleTimer();
      }
    } else {
      this.setState({
        errorMessage: 'Please, fill in the fields.',
        isError: true,
      });

      this.handleTimer();
    }
  };

  handleTimer = () => {
    setTimeout(() => this.setState({ isError: false }), 5000);
  };

  handleEnterAnswer = (e) => {
    if (e.charCode === 13) {
      this.handleNextStep();
    }
  };

  render() {
    const {
      topValue,
      bottomValue,
      onChangeTop,
      onChangeBottom,
    } = this.props;
    const { isError, errorMessage } = this.state;

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
            onKeyPress={this.handleEnterAnswer}
          />

          <img src={answer} />

          <input
            type="text"
            className="input input-bottom"
            value={bottomValue}
            onChange={onChangeBottom}
            onKeyPress={this.handleEnterAnswer}
          />
        </div>

        {isError && (
          <div className="error">{errorMessage}</div>
        )}

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

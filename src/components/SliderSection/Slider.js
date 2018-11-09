import React from 'react';
import PropTypes from 'prop-types';

import arrowRight from '~image/arrow-right.svg';
import arrowLeft from '~image/arrow-left.svg';

class Slider extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    currentSlide: 0,
  };

  goToPrevSlide = () => {
    const { currentSlide } = this.state;
    const { children } = this.props;

    const newCurrentSlide =
      currentSlide === 0 ?
        React.Children.count(children) - 1 :
        currentSlide - 1;


    this.setState({
      currentSlide: newCurrentSlide,
    });
  };

  goToNextSlide = () => {
    const { currentSlide } = this.state;
    const { children } = this.props;

    const newCurrentSlide =
      currentSlide === React.Children.count(children) - 1 ?
        0 :
        currentSlide + 1;


    this.setState({
      currentSlide: newCurrentSlide,
    });
  };

  render() {
    const { currentSlide } = this.state;
    const { children } = this.props;
    const { props: { children: slide }} = React.Children.toArray(children)[currentSlide];
    const count = React.Children.count(children);

    return (
      <div className="slider">
        <div className="control-panel">
          <div className="square info flex-both-centered">
            {currentSlide + 1} / {count}
          </div>

          <div className="controls">
            <div
              className="square flex-both-centered"
              onClick={this.goToPrevSlide}
            >
              <img src={arrowLeft} />
            </div>

            <div
              className="square flex-both-centered"
              onClick={this.goToNextSlide}
            >
              <img src={arrowRight} />
            </div>
          </div>
        </div>

        <div className="slider-wrapper">
          <div
            style={{
              backgroundImage: `url(${slide}) `
            }}
            className="slide"
          />
        </div>
      </div>
    );
  }
}

export default Slider;

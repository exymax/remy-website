import React from 'react';
import SliderComponent from "react-slick";

import arrowRight from '~image/arrow-right.svg';
import arrowLeft from '~image/arrow-left.svg';
import { slides } from './constants';

class Slider extends React.PureComponent {
  state = {
    currentSlide: 1,
  };

  settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => this.setState({ currentSlide: index + 1 }),
  };

  slider = React.createRef();

  goToNext = () => {
    this.slider.current.slickNext();
  };

  goToPrev = () => {
    this.slider.current.slickPrev();
  };

  render() {
    const { currentSlide } = this.state;
    const length = slides.length;

    return (
      <div className="slider">
        <div className="control-panel">
          <div className="square info flex-both-centered">
            {currentSlide} / {length}
          </div>

          <div className="controls">
            <div
              className="square flex-both-centered"
              onClick={this.goToPrev}
            >
              <img src={arrowLeft} />
            </div>

            <div
              className="square flex-both-centered"
              onClick={this.goToNext}
            >
              <img src={arrowRight} />
            </div>
          </div>
        </div>

        <SliderComponent
          ref={this.slider}
          {...this.settings}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slider-wrapper"
            >
              <div
                style={{
                  backgroundImage: `url(${slide}) `
                }}
                className="slide"
              />
            </div>
          ))}
        </SliderComponent>
      </div>
    );
  }
}

export default Slider;

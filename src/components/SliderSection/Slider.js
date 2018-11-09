import React from 'react'

class Slider extends React.PureComponent {
  state = {
    images: [
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
    ],
    currentIndex: 0,
    translateValue: 0
  };

  goToPrevSlide = () => {

  };

  goToNextSlide = () => {

  };

  render() {
    return (
      <div className="slider">
        <div className="slider-wrapper">
          Slider
        </div>
      </div>
    );
  }
}

export default Slider;

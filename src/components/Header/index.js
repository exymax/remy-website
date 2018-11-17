import React from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';

import logo from '~image/Remy_logo_white.svg';
import './styles.scss';

smoothscroll.polyfill();

class Header extends React.PureComponent {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  };

  scrollTo = (offsetTop) => {
      window.scroll({ top: offsetTop, left: 0, behavior: 'smooth' });
  };

  handleScroll = () => {
    const { height } = this.props;
    this.scrollTo(height);
  };

  handleJoinUsScroll = () => {
    this.scrollTo(
        document.querySelector('.hiring-section').offsetTop
    );
  };

  render() {
    const { height, width } = this.props;

    return (
      <div
        className="header"
        style={{ height, width: width }}
      >
        <div
          className="gradient-pattern"
          style={{ height, width: width }}
        />
        <img
          src={logo}
          className="logo"
        />

        <div className="title">
          robotics technology that takes the routine and inefficiency out of cooking
        </div>

        <div className="discover-more" onClick={this.handleScroll}>
          <div className="ball-section">
            <div className="ball" />
          </div>

          discover more
        </div>

        <div className="join-us flex-both-centered" onClick={this.handleJoinUsScroll}>
          join us
        </div>
      </div>
    );
  }
}

export default Header;

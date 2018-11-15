import React from 'react';
import PropTypes from 'prop-types';

import logo from '~image/Remy_logo_white.svg';
import './styles.scss';

class Header extends React.PureComponent {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  };

  render() {
    const { height, width } = this.props;

    return (
      <div
        className="header"
        style={{ height }}
      >
        <div
          className="gradient-pattern"
          style={{ height, width: width - 15 }}
        />
        <img
          src={logo}
          className="logo"
        />

        <div className="title">
          robotics technology that takes the routine and inefficiency out of cooking
        </div>

        <div className="discover-more">
          <div className="ball-section">
            <div className="ball" />
          </div>

          discover more
        </div>

        <div className="join-us flex-both-centered">
          join us
        </div>
      </div>
    );
  }
}

export default Header;

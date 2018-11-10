import React from 'react';

import logo from '~image/Remy_logo_white.svg';
import './styles.scss';

class Header extends React.PureComponent {
  render() {
    return (
      <div className="header">
        <img
          src={logo}
          className="logo"
        />

        <div className="title">
          robotics technology that takes the routine and inefficiency out of cooking
        </div>

        <div className="discover-more">
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
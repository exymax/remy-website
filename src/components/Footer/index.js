import React from 'react';

import logo from '~image/Remy_logo_white.svg';
import './styles.scss';

export default () => (
  <div className="footer">
    <div className="countries">
      <div className="country">
        <div className="title">
          Barcelona
        </div>

        <div className="address">
          <span>Remy Robotics (HQ)</span>
          <span>Port Vell Barcelona</span>
          <span>Carrer de l’Escar 26 (Gallery Building)</span>
          <span>08039</span>
          <span>Barcelona, Spain</span>
        </div>
      </div>

      <div className="country">
        <div className="title">
          London
        </div>

        <div className="address">
          <span>Kinetik</span>
          <span>4th floor, Beaumont House</span>
          <span>Kensington Village</span>
          <span>W14 8TS</span>
          <span>London, United Kingdom</span>
        </div>
      </div>

      <div className="country">
        <div className="title">
          Berlin
        </div>

        <div className="address">
          <span>Kinetik</span>
          <span>Friedrichstrasse 68,</span>
          <span>Berlin</span>
          <span>10117</span>
          <span>Germany</span>
        </div>
      </div>

      <div className="country">
        <div className="title">
          Moscow
        </div>

        <div className="address">
          <span>Kinetik</span>
          <span>1st floor, Vasilevskaya str.</span>
          <span>13 bld. 2</span>
          <span>123056</span>
          <span>Moscow, Russia</span>
        </div>
      </div>

      <div className="country">
        <div className="title">
          Los Angeles
        </div>

        <div className="address">
          <span>Kinetik</span>
          <span>520 Broadway, Suite 200</span>
          <span>Santa Monica</span>
          <span>90401</span>
          <span>California, USA</span>
        </div>
      </div>
    </div>

    <div className="bottom-section">
      <img
        src={logo}
        className="logo"
      />
      <span className="copyright">Copyright © 2018. All rights reserved.</span>
      <span className="privacy-policy">privacy policy</span>
    </div>
  </div>
);

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import close from '~image/close.svg';
import back from '~image/back.svg';
import { countries } from '~constants';
import Dropdown from '~components/Dropdown';
import './styles.scss';

class Toolbar extends React.PureComponent {
  static propTypes = {
    activeJob: PropTypes.number,
    country: PropTypes.object,
    isScrollOnStart: PropTypes.bool.isRequired,
    onCloseHiringPanel: PropTypes.func.isRequired,
    onSelectCountry: PropTypes.func.isRequired,
    onCloseCurrentJob: PropTypes.func.isRequired,
  };

  render() {
    const {
      activeJob,
      country,
      onCloseHiringPanel,
      onSelectCountry,
      onCloseCurrentJob,
      isScrollOnStart,
    } = this.props;
    const { label } = country;
    const className = classNames(
      "toolbar",
      { "active-job": activeJob },
      { "is-scrolled": !isScrollOnStart }
      );

    return (
      <div className={className}>
        <div className="title flex-both-centered">
          we are hiring
        </div>

        <div className="right-section">
          <Dropdown
            selectedItem={country}
            items={countries}
            onSelect={onSelectCountry}
          />

          <img
            src={close}
            className="close"
            onClick={onCloseHiringPanel}
          />
        </div>

        <div
          className="back"
          onClick={onCloseCurrentJob}
        >
          <img src={back} />
        </div>

        <div className="filters">
          Filter: <span className="label">{label}</span>
        </div>
      </div>

    );
  }
}

export default Toolbar;

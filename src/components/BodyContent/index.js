import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import close from '~image/close.svg';
import { countries } from '~constants';
import Dropdown from '~components/Dropdown';
import './styles.scss';

class BodyContent extends React.PureComponent {
  static propTypes = {
    activeJob: PropTypes.number,
    country: PropTypes.object,
    jobs: PropTypes.array.isRequired,
    onCloseHiringPanel: PropTypes.func.isRequired,
    onSelectCountry: PropTypes.func.isRequired,
    baseComponent: PropTypes.func.isRequired,
  };

  render() {
    const {
      jobs,
      country,
      activeJob,
      onCloseHiringPanel,
      onSelectCountry,
      baseComponent,
    } = this.props;

    const job = _.find(jobs, function(job) {
      return job.id === activeJob;
    });

    const Component = job ? job.component : baseComponent;

    return (
      <div className="body-content">
        <div className="toolbar">
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

        <Component />
      </div>
    );
  }
}

export default BodyContent;

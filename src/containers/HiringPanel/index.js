import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '~components/Sidebar';
import BodyContent from '~components/BodyContent';
import { jobs, countries } from '~constants';
import { BaseScreen } from './descriptions';

class HiringPanel extends React.PureComponent {
  static propTypes = {
    activeJob: PropTypes.number,
    onOpenHiringPanel: PropTypes.func.isRequired,
    onCloseHiringPanel: PropTypes.func.isRequired,
  };

  state = {
    country: countries[0],
  };

  handleSelectCountry = (country) => {
    this.setState({
      country,
    });
  };

  render() {
    const {
      activeJob,
      onCloseHiringPanel,
      onOpenHiringPanel,
    } = this.props;
    const { country } = this.state;

    const filteredJobs = country.name === 'all' ? jobs : jobs.filter((job) => job.country === country.name);

    return (
      <div className="hiring-panel">
        <Sidebar
          activeJob={activeJob}
          jobs={filteredJobs}
          onOpenHiringPanel={onOpenHiringPanel}
        />

        <BodyContent
          country={country}
          activeJob={activeJob}
          jobs={jobs}
          onCloseHiringPanel={onCloseHiringPanel}
          onSelectCountry={this.handleSelectCountry}
          baseComponent={BaseScreen}
        />
      </div>
    );
  }
}

export default HiringPanel;

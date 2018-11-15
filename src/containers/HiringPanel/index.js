import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '~components/Sidebar';
import BodyContent from '~components/BodyContent';
import Toolbar from '~components/Toolbar';
import { jobs, countries } from '~constants';
import { BaseScreen } from './descriptions';

class HiringPanel extends React.PureComponent {
  static propTypes = {
    activeJob: PropTypes.number,
    onCloseHiringPanel: PropTypes.func.isRequired,
    onChooseOtherJob: PropTypes.func.isRequired,
    onCloseCurrentJob: PropTypes.func.isRequired,
  };

  state = {
    country: countries[0],
    isScrollOnStart: true,
  };

  handleSelectCountry = (country) => {
    this.setState({
      country,
    });
  };

  handleYReachStart = () => {
    this.setState({
      isScrollOnStart: true,
    });
  };

  handleScrollDown = () => {
    this.setState({
      isScrollOnStart: false,
    });
  };

  render() {
    const {
      activeJob,
      onCloseHiringPanel,
      onChooseOtherJob,
      onCloseCurrentJob,
    } = this.props;
    const {
      country,
      isScrollOnStart,
    } = this.state;

    const filteredJobs = country.name === 'all' ? jobs : jobs.filter((job) => job.country === country.name);

    return (
      <div className="hiring-panel">
        <Toolbar
          isScrollOnStart={isScrollOnStart}
          activeJob={activeJob}
          country={country}
          onCloseHiringPanel={onCloseHiringPanel}
          onSelectCountry={this.handleSelectCountry}
          onCloseCurrentJob={onCloseCurrentJob}
        />

        <Sidebar
          isScrollOnStart={isScrollOnStart}
          activeJob={activeJob}
          jobs={filteredJobs}
          onChooseOtherJob={onChooseOtherJob}
          onYReachStart={this.handleYReachStart}
          onScrollDown={this.handleScrollDown}
        />

        <BodyContent
          activeJob={activeJob}
          jobs={jobs}
          baseComponent={BaseScreen}
        />
      </div>
    );
  }
}

export default HiringPanel;

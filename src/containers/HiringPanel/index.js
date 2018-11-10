import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '~components/Sidebar';
import BodyContent from '~components/BodyContent';
import { jobs } from '~constants';

class HiringPanel extends React.PureComponent {
  static propTypes = {
    closePanel: PropTypes.func.isRequired,
  };

  state = {
    activeJob: 1,
  };

  changeActiveJob = (id) => {
    this.setState({
      activeJob: id,
    });
    console.log(id);
  };

  render() {
    const { activeJob } = this.state;
    const { closePanel } = this.props;

    return (
      <div className="hiring-panel">
        <Sidebar
          activeJob={activeJob}
          jobs={jobs}
          changeActiveJob={this.changeActiveJob}
        />

        <BodyContent
          activeJob={activeJob}
          jobs={jobs}
          closePanel={closePanel}
        />
      </div>
    );
  }
}

export default HiringPanel;

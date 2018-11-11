import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '~components/Sidebar';
import BodyContent from '~components/BodyContent';
import { jobs } from '~constants';
import { BaseScreen } from './descriptions';

class HiringPanel extends React.PureComponent {
  static propTypes = {
    activeJob: PropTypes.number,
    onOpenHiringPanel: PropTypes.func.isRequired,
    onCloseHiringPanel: PropTypes.func.isRequired,
  };

  render() {
    const {
      activeJob,
      onCloseHiringPanel,
      onOpenHiringPanel,
    } = this.props;

    return (
      <div className="hiring-panel">
        <Sidebar
          activeJob={activeJob}
          jobs={jobs}
          onOpenHiringPanel={onOpenHiringPanel}
        />

        <BodyContent
          activeJob={activeJob}
          jobs={jobs}
          onCloseHiringPanel={onCloseHiringPanel}
          baseComponent={BaseScreen}
        />
      </div>
    );
  }
}

export default HiringPanel;

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import close from '~image/close.svg';
import './styles.scss';

class BodyContent extends React.PureComponent {
  static propTypes = {
    activeJob: PropTypes.bool.isRequired,
    jobs: PropTypes.func.isRequired,
    closePanel: PropTypes.func.isRequired,
  };

  render() {
    const {
      jobs,
      activeJob,
      closePanel,
    } = this.props;

    const job = _.find(jobs, function(job) {
      return job.id === activeJob;
    });

    const { component: Component } = job;

    return (
      <div className="body-content">
        <div className="toolbar">
          <img
            src={close}
            className="close"
            onClick={closePanel}
          />
        </div>

        <Component />
      </div>
    );
  }
}

export default BodyContent;

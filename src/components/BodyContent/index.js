import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import close from '~image/close.svg';
import './styles.scss';

class BodyContent extends React.PureComponent {
  static propTypes = {
    activeJob: PropTypes.number,
    jobs: PropTypes.array.isRequired,
    onCloseHiringPanel: PropTypes.func.isRequired,
    baseComponent: PropTypes.func.isRequired,
  };

  render() {
    const {
      jobs,
      activeJob,
      onCloseHiringPanel,
      baseComponent,
    } = this.props;

    const job = _.find(jobs, function(job) {
      return job.id === activeJob;
    });

    const Component = job ? job.component : baseComponent;

    return (
      <div className="body-content">
        <div className="toolbar">
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

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';

import './styles.scss';

class BodyContent extends React.PureComponent {
  static propTypes = {
    activeJob: PropTypes.number,
    jobs: PropTypes.array.isRequired,
    baseComponent: PropTypes.func.isRequired,
  };

  render() {
    const {
      jobs,
      activeJob,
      baseComponent,
    } = this.props;

    const job = _.find(jobs, function(job) {
      return job.id === activeJob;
    });

    const Component = job ? job.component : baseComponent;

    const className = classNames("body-content", { "inactive-job": !activeJob });

    return (
      <div className={className}>
        <Component />
      </div>
    );
  }
}

export default BodyContent;

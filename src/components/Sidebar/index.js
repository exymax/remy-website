import React from 'react';
import PropTypes from 'prop-types';

import Scrollbar from '~components/Scrollbar';
import Item from './Item';
import './styles.scss';

class Sidebar extends React.PureComponent {
  static propTypes = {
    activeJob: PropTypes.number,
    jobs: PropTypes.array.isRequired,
    onOpenHiringPanel: PropTypes.func.isRequired,
  };

  render() {
    const {
      activeJob,
      jobs,
      onOpenHiringPanel,
    } = this.props;

    return (
      <div className="sidebar">
        <div className="title flex-both-centered">
          we are hiring
        </div>

        <div className="container">
          <Scrollbar>
            {jobs.map((job) => {
              const { id } = job;
              const isActive = activeJob === id;

              return (
                <Item
                  key={id}
                  job={job}
                  isActive={isActive}
                  onOpenHiringPanel={onOpenHiringPanel}
                />
              );
            })}
          </Scrollbar>
        </div>
      </div>
    );
  }
}

export default Sidebar;

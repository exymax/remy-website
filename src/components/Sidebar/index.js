import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Scrollbar from '~components/Scrollbar';
import Item from './Item';
import './styles.scss';

class Sidebar extends React.PureComponent {
  static propTypes = {
    activeJob: PropTypes.number,
    jobs: PropTypes.array.isRequired,
    onChooseOtherJob: PropTypes.func.isRequired,
  };

  state = {
    height: 0,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      height: window.innerHeight,
    });
  };

  render() {
    const {
      activeJob,
      jobs,
      onChooseOtherJob,
    } = this.props;
    const { height } = this.state;
    const className = classNames(
      "sidebar",
      { "active-job": activeJob },
    );
    const heightWithoutToolbar = height - 52 - 82;

    return (
      <div className={className}>
        <div
          className="container"
          style={{ height: `${heightWithoutToolbar}px` }}
        >
          <Scrollbar>
            {jobs.map((job) => {
              const { id } = job;
              const isActive = activeJob === id;

              return (
                <Item
                  key={id}
                  job={job}
                  isActive={isActive}
                  onChooseOtherJob={onChooseOtherJob}
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

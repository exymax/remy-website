import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Scrollbar from '~components/Scrollbar';
import Item from './Item';
import './styles.scss';

class Sidebar extends React.PureComponent {
  static propTypes = {
    activeJob: PropTypes.number,
    isScrollOnStart: PropTypes.bool.isRequired,
    jobs: PropTypes.array.isRequired,
    onChooseOtherJob: PropTypes.func.isRequired,
    onYReachStart: PropTypes.func.isRequired,
    onScrollDown: PropTypes.func.isRequired,
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
      onYReachStart,
      onScrollDown,
      isScrollOnStart,
    } = this.props;
    const { height } = this.state;
    const className = classNames(
      "sidebar",
      { "active-job": activeJob },
      {"is-scrolled": !isScrollOnStart}
    );

    return (
      <div className={className}>
        <div
          className="container"
          style={{ height: `${height}px` }}
        >
          <Scrollbar
            onYReachStart={onYReachStart}
            onScrollDown={onScrollDown}
          >
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

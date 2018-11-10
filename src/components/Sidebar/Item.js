import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.PureComponent {
  static propTypes = {
    job: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired,
    changeActiveJob: PropTypes.func.isRequired,
  };

  changeActiveJob = () => {
    const {
      job: { id },
      changeActiveJob,
    } = this.props;

    changeActiveJob(id)
  };

  render() {
    const {
      job: {
        name,
        location,
      },
    } = this.props;
    return (
      <div
        className="item"
        onClick={this.changeActiveJob}
      >
        <div className="name">{name}</div>
        <div className="location">{location}</div>
      </div>
    );
  }
}

export default Item;

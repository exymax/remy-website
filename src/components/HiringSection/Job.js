import React from 'react';
import PropTypes from 'prop-types';

class Job extends React.PureComponent {
  static propTypes = {
    job: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    }).isRequired,
    onOpenHiringPanel: PropTypes.func.isRequired,
  };

  handleChangeActiveJob = () => {
    const {
      job: {
        id,
      },
      onOpenHiringPanel,
    } = this.props;

    onOpenHiringPanel(id);
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
        className="job"
        onClick={this.handleChangeActiveJob}
      >
        <div className="name">{name}</div>

        <div className="location">{location}</div>
      </div>
    );
  }
}

export default Job;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Item extends React.PureComponent {
  static propTypes = {
    job: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired,
    onOpenHiringPanel: PropTypes.func.isRequired,
  };

  handleOpenHiringPanel = () => {
    const {
      job: { id },
      onOpenHiringPanel,
    } = this.props;

    onOpenHiringPanel(id)
  };

  render() {
    const {
      job: {
        name,
        location,
      },
      isActive,
    } = this.props;
    const className = classNames("item", { 'active': isActive });

    return (
      <div
        className={className}
        onClick={this.handleOpenHiringPanel}
      >
        <div className="name">{name}</div>
        <div className="location">{location}</div>
      </div>
    );
  }
}

export default Item;

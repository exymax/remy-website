import React from 'react';
import PropTypes from 'prop-types';

import tick from '~image/tick.svg';

class DropdownItem extends React.PureComponent {
  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    item: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  handleSelect = () => {
    const {
      item,
      onSelect,
    } = this.props;

    onSelect(item);
  };

  render() {
    const {
      isActive,
      item: { label },
    } = this.props;

    return (
      <div
        className="dropdown-item"
        onClick={this.handleSelect}
      >
        {label}

        {isActive && <img src={tick} />}
      </div>
    );
  }
}

export default DropdownItem;

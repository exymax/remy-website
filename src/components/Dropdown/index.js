import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import caret from '~image/caret.svg';
import DropdownItem from './DropdownItem';
import './styles.scss';

class Dropdown extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    selectedItem: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  state = {
    isOpenDropdown: false,
  };

  toggleDropdown = () => {
    const { isOpenDropdown } = this.state;

    this.setState({
      isOpenDropdown: !isOpenDropdown,
    })
  };

  handleSelect = (country) => {
    const { onSelect } = this.props;

    this.toggleDropdown();
    onSelect(country);
  };

  render() {
    const {
      className,
      selectedItem,
      items,
    } = this.props;
    const { isOpenDropdown } = this.state;
    const { label } = selectedItem;
    const dropdownClassName = classNames('dropdown', className);

    return (
      <div className={dropdownClassName}>
        <div
          className="dropdown-button"
          onClick={this.toggleDropdown}
        >
          {label}
          {' '}
          <img
            src={caret}
            className="caret"
          />
        </div>

        {isOpenDropdown && (
          <div
            className="dropdown-overlay"
            onClick={this.toggleDropdown}
          />
        )}

        {isOpenDropdown && (
          <div className="dropdown-menu">
            {items.map((item) => {
              const { id } = item;
              const isActive = selectedItem.id === id;

              return (
                <DropdownItem
                  key={id}
                  isActive={isActive}
                  item={item}
                  onSelect={this.handleSelect}
                />
              )
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;

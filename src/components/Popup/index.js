import React from 'react';
import PropTypes from 'prop-types';

import close from '~image/close.svg';
import './styles.scss';

class Popup extends React.PureComponent {
  static propTypes = {
    button: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
  };

  state = {
    isOpen: false,
  };

  toggleOpenPopup = () => {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen,
    });
  };

  render() {
    const { isOpen } = this.state;
    const {
      button,
      children,
    } = this.props;

    return (
      <div className="popup">
        <div onClick={this.toggleOpenPopup}>
          {button}
        </div>

        {isOpen && (
          <div className="panel">
            {children}

            <div className="close">
              <img
                src={close}
                onClick={this.toggleOpenPopup}
              />
            </div>
          </div>
        )}

        {isOpen && (
          <div
            className="overlay"
            onClick={this.toggleOpenPopup}
          />
        )}
      </div>
    );
  }
}

export default Popup;

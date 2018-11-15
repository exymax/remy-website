import React from 'react';
import PropTypes from 'prop-types';

import close from '~image/close.svg';
import './styles.scss';

class Popup extends React.PureComponent {
  static propTypes = {
    button: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
  };

  state = {
    isOpen: false,
  };

  handleOpenPopup = () => {
    const { onOpen } = this.props;

    this.setState({
      isOpen: true,
    });

    onOpen && onOpen();
  };

  handleClosePopup = () => {
    const { onClose } = this.props;

    this.setState({
      isOpen: false,
    });

    onClose && onClose();
  };

  render() {
    const { isOpen } = this.state;
    const {
      button,
      children,
    } = this.props;

    return (
      <div className="popup">
        <div onClick={this.handleOpenPopup}>
          {button}
        </div>

        {isOpen && (
          <div className="panel">
            {children}

            <div className="close">
              <img
                src={close}
                onClick={this.handleClosePopup}
              />
            </div>
          </div>
        )}

        {isOpen && (
          <div
            className="overlay"
            onClick={this.handleClosePopup}
          />
        )}
      </div>
    );
  }
}

export default Popup;

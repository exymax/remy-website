import React from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.min.css';

class Scrollbar extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <PerfectScrollbar>
        {children}
      </PerfectScrollbar>
    );
  }
}

export default Scrollbar;

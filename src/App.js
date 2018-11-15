import React from 'react';

import Landing from '~containers/Landing';
import HiringPanel from '~containers/HiringPanel';

class App extends React.PureComponent {
  state = {
    height: 0,
    activeJob: null,
    isOpenHiringPanel: false,
  };

  componentDidMount = () => {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  };

  handleResize = () => {
    this.setState({
      height: window.innerHeight,
    });
  };

  handleOpenHiringPanel = (id) => {
     this.setState({
      activeJob: id,
      isOpenHiringPanel: true,
    });
  };

  handleCloseHiringPanel = () => {
    this.setState({
      activeJob: null,
      isOpenHiringPanel: false,
    });
  };

  render() {
    const {
      height,
      activeJob,
      isOpenHiringPanel,
    } = this.state;

    if (isOpenHiringPanel) {
      return (
        <HiringPanel
          activeJob={activeJob}
          onOpenHiringPanel={this.handleOpenHiringPanel}
          onCloseHiringPanel={this.handleCloseHiringPanel}
        />
      );
    }

    return (
      <Landing
        height={height}
        onOpenHiringPanel={this.handleOpenHiringPanel}
      />
    );
  }
}

export default App;

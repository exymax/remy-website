import React from 'react';

import Landing from '~containers/Landing';
import HiringPanel from '~containers/HiringPanel';

class App extends React.PureComponent {
  state = {
    height: 0,
    width: 0,
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
      width: document.documentElement.clientWidth,
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

  handleChooseOtherJob = (id) => {
    this.setState({
      activeJob: id,
    });
  };

  handleCloseCurrentJob = () => {
    this.setState({
      activeJob: null,
    });
  };

  render() {
    const {
      height,
      width,
      activeJob,
      isOpenHiringPanel,
    } = this.state;

    if (isOpenHiringPanel) {
      return (
        <HiringPanel
          activeJob={activeJob}
          onCloseHiringPanel={this.handleCloseHiringPanel}
          onChooseOtherJob={this.handleChooseOtherJob}
          onCloseCurrentJob={this.handleCloseCurrentJob}
        />
      );
    }

    return (
      <Landing
        height={height}
        width={width}
        onOpenHiringPanel={this.handleOpenHiringPanel}
      />
    );
  }
}

export default App;

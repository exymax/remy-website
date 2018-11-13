import React from 'react';

import Landing from '~containers/Landing';
import HiringPanel from '~containers/HiringPanel';

class App extends React.PureComponent {
  state = {
    activeJob: null,
    isOpenHiringPanel: false,
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
      <Landing onOpenHiringPanel={this.handleOpenHiringPanel} />
    );
  }
}

export default App;

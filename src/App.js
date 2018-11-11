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

  render() {
    const {
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
      <Landing onOpenHiringPanel={this.handleOpenHiringPanel} />
    );
  }
}

export default App;

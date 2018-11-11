import React from 'react';

import Landing from '~containers/Landing';
import HiringPanel from '~containers/HiringPanel';

class App extends React.PureComponent {
  state = {
    isOpenHiringPanel: false,
  };

  toggleOpenHiringPanel = () => {
    const { isOpenHiringPanel } = this.state;

    this.setState({
      isOpenHiringPanel: !isOpenHiringPanel,
    });
  };

  render() {
    const { isOpenHiringPanel } = this.state;

    if (isOpenHiringPanel) {
      return (
        <HiringPanel closePanel={this.toggleOpenHiringPanel} />
      );
    }

    return (
      <Landing />
    );
  }
}

export default App;

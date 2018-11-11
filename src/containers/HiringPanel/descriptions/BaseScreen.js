import React from 'react';

class BaseScreen extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <div className="description">
          <div className="title">
            Welcome
          </div>
        </div>
      </div>
    );
  }
}

export default BaseScreen;

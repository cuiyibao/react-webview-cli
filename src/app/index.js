import React, { Component } from 'react';
import './base.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export function getApp(Component) {
  return (
    <App>{Component}</App>
  )
}

export default App;

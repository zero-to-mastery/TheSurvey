import React, { Component } from 'react';
import './App.css';

import UserAccount from '../pages/UserAccount/UserAccount';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserAccount name='John Doe' />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import SetNewPassword from '../components/SetNewPassword/SetNewPassword';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SetNewPassword />
      </div>
    );
  }
}

export default App;

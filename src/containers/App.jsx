import React, { Component } from 'react';
import './App.css';
import NewPasswordSet from '../components/NewPasswordSet/NewPasswordSet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewPasswordSet />
      </div>
    );
  }
}

export default App;

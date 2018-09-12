import React, { Component } from 'react';
import './App.css';
import UserAccount from '../pages/UserAccount/UserAccount';

class App extends Component {  
  render() {
    return (
      <div className="App">
        <UserAccount name='John Doe' email='john@gmail.com' />
      </div>
    );
  }
}

export default App;

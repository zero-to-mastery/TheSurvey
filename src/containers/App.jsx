import React, { Component } from 'react';
import NewPasswordSet from '../components/NewPasswordSet/NewPasswordSet';
import SetNewPassword from '../components/SetNewPassword/SetNewPassword';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <NewPasswordSet />
        <SetNewPassword />
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Navbar from './NavBar';
import Home from './Home';
import Routes from './Routes';

class App extends Component {


  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>

    )
  }
}

export default App;



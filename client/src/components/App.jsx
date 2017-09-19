import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './NavBar';
import Home from './Home';
import Routes from './Routes';

class App extends Component {

  constructor () {
    super();

    this.state = {
      juniorsData: []
    }

    this.getJuniors = this.getJuniors.bind(this);
  }

  componentDidMount() {
    this.getJuniors();
    console.log('juniorsEntry loaded in app')
  }


  getJuniors() {
    axios.get('/api/players')
      .then(({data}) => {
        console.log('this is state data', this.state.juniorsData);
        console.log('this is api data', data);
        this.setState({
          juniorsData: data,
        })
        console.log('this is state data after setting', this.state.juniorsData);
      })
      .catch(err => console.log('error in getting junior data', err));
  }


  render() {
    const { juniorsData } = this.state
    return (
      <div>
        <h3 className="title">Welcome to HRLA PingPong Rankings</h3>
        <Navbar />
        <Routes juniors={juniorsData} refresh={this.getJuniors}/>
      </div>
    )
  }
}

export default App;



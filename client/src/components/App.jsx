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
    this.onClick = this.onClick.bind(this);
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

  onClick(id) {
    axios.delete('/api/players/' + id) 
      .then(() => {
        console.log('deleted id: ', id)
        this.getJuniors();
      })
      .catch(err => console.log('error in deleting', err));
  }

  render() {
    const { juniorsData } = this.state
    return (
      <div className="container">
        <h3 className="title">Welcome to HRLA PingPong Rankings</h3>
        <Navbar />
        <Routes juniors={juniorsData} refresh={this.getJuniors} remove={this.onClick}/>
      </div>
    )
  }
}

export default App;



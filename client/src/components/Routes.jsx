import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import Juniors from './Juniors'
import Seniors from './Seniors'

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/juniors' component={Juniors}/>
          <Route exact path='/seniors' component={Seniors}/>
        </Switch>
      </div>
    )
  }
}

export default Routes;

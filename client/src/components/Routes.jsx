import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import JuniorsEntry from './JuniorsEntry'
import Seniors from './Seniors'

const Routes = ({ juniors, refresh, remove }) => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/juniors' render={() => <JuniorsEntry juniors={juniors} refresh={refresh} remove={remove}/>}/>
      <Route path='/seniors' render={() => <Seniors />}/>
    </Switch>
  </div>
)
  

export default Routes;

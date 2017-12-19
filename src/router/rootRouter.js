import React,{ Component } from 'react';
import {BrowserRouter as Router,Redirect} from 'react-router-dom';
import { Switch,Route } from 'react-router'
import {
  NotFountPage
} from '../components'

import Login from '../containers/Login/Login'; // 登录
import App from '../containers/App/App';
import TestComponent from '../containers/TestComponent/TestComponent';
import Home from '../containers/Home/Home'; // 主页
import {
  Closed
} from '../components';

export default class RootRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <App  path="/home" >
              <Route  path="/home/closed" component={Closed}/>
          </App>
          <TestComponent path="/test">

          </TestComponent>
          <Route path="/404" component={NotFountPage}/>
          <Redirect to="/404" from="*"/>
        </Switch>
      </Router>
    )
  }
}

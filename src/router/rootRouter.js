import React,{ Component } from 'react';
import {BrowserRouter as Router,Redirect} from 'react-router-dom';
import { Switch,Route } from 'react-router'
import {
  NotFountPage
} from '../components'

// import asyncComponent from '../testContainer/AsyncComponent';
// import {
//   testOne
// } from '../testContainer';
//
//  console.log("route")
// // console.log(testOne)
// // console.log(Login)
// // const applyDeposit = asyncComponent(() => import("../testContainer/testOne/testOne"))
// import testOne from '../testContainer/testOne/testOne'
// console.log(testOne)
import Login from '../containers/Login/Login';
import App from '../containers/App/App';
import TestComponent from '../containers/TestComponent/TestComponent';
import {
  Closed
} from '../components';

export default class RootRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
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

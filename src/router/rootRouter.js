import React,{ Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
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
import Home from '../containers/Home/Home'
export default class RootRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="*" component={NotFountPage}/>
        </Switch>
      </Router>
    )
  }
}

import React,{ Component } from 'react';
import {BrowserRouter as Router,Redirect} from 'react-router-dom';
import { Switch,Route } from 'react-router';
import Bundle from './Bundle';
import {
  NotFountPage,
  Closed
} from '../components'

//import Login from '../containers/Login/Login'; // 登录
//import App from '../containers/App/App';
import TestComponent from '../containers/TestComponent/TestComponent';
//import Home from '../containers/Home/Home'; // 主页

// 懒加载模式
const Home = (props) => (
    <Bundle load={() => import('../containers/Home/Home')}>
        {(Home) => <Home {...props}/>}
    </Bundle>
);

const Login = (props) => (
    <Bundle load={() => import('../containers/Login/Login')}>
        {(Login) => <Login {...props}/>}
    </Bundle>
);

const App = (props) => (
    <Bundle load={() => import('../containers/App/App')}>
        {(App) => <App {...props}/>}
    </Bundle>
);



export default class RootRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
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

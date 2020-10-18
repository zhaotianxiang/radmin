import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Empty from './view/Empty';
import Login from './view/Login';
import Home from './view/Home';
import { isLoginAuthorized, saveLoginUser} from './common/Authorize';
import './App.scss';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={(props)=>{
          return <Redirect to="/home"></Redirect>;
        }}></Route>

        <Route path="/home" render={(props)=>{
          if(isLoginAuthorized()){
            return <Home {...props}></Home>
          }
          return <Redirect to="/login"></Redirect>
          // 权限校验
        }}></Route>

        <Route path="/login" component={Login}></Route>
        
        <Route component={Empty}></Route>
      </Switch>
    </Router>
  );
}


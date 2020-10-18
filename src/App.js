import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Empty from './view/Empty';
import Login from './view/Login';
import Home from './view/Home';

import './App.scss';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={(props)=>{
          return <Redirect to="/login"></Redirect>;
        }}></Route>

        <Route path="/home" render={(props)=>{
          return <Home {...props}></Home>
        }}></Route>

        <Route path="/login" component={Login}></Route>
        
        <Route component={Empty}></Route>
      </Switch>
    </Router>
  );
}

export default App;


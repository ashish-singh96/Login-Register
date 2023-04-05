import React, { useState } from 'react'
import Homepage from './component/homepage/Homepage';
import './App.css';
import Login from './component/login/Login';
import Register from './component/register/Register';
import {BrowserRouter as Router, RouterProvider, Route, Switch } from "react-router-dom";

function App() {
  const[user,setLoginUser]=useState({});
  return (
    <div className='App'>

      <Router>
        <Switch>
          <Route exact path='/'>{user && user._id?<Homepage />:<Login/>}</Route> 
          <Route path='/login'><Login /></Route>
          <Route path='/register'><Register /></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { Container } from "react-bootstrap";
import "semantic-ui-css/semantic.min.css";
import { api } from "./services/Api";
import {setAuth} from '../src/actions/userAction';

import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Login from './components/Login';
import NavBar from './components/NavBar';


const App = ({user, setAuth}) => {

  useEffect(() => {
    const token = localStorage.token;
    if (token && token !== undefined) {
      api.auth.getCurrentUser().then((data) => {
        setAuth({
          user: {
            id: data.user.id,
            username: data.user.username,
          },
        });
      });
    }
  }, [setAuth]);

  // const onLogin = (data, routerProps) => {
  //   if (data.jwt) {
  //     console.log("successfully logged in!");
  //     localStorage.setItem("token", data.jwt);
  //     setAuth({
  //       user: {
  //         id: data.user.id,
  //         username: data.user.username,
  //       },
  //     });
  //   }
  // };

  // const onSignup = (data, routerProps) => {
  //   if (data.jwt) {
  //     console.log("successfully signed up");
  //     localStorage.setItem("token", data.jwt);
  //     setAuth({
  //       user: {
  //         id: data.id,
  //         email: data.email,
  //       },
  //     });
  //   }
  // };

  // const onLogout = () => {
  //   localStorage.removeItem("token");
  //   setAuth({ ...auth, user: {} });
  //   window.history.pushState({}, "", "/login");
  //   window.location.reload();
  // };

  return (
    <div className="app">
      <Router>
        <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Homepage/>} />
        <Route path="/signup" exact component={Signup}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
      </Router>
   </div>
  );
};

const mapStateToProps = state => {
  return {user: state.auth}
}

export default connect(mapStateToProps, {setAuth})(App);
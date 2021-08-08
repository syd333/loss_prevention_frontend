import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { Container } from "react-bootstrap";
import { api } from "./services/Api";
import {setAuth} from '../src/actions/userAction';

import Homepage from '../src/Homepage';
import Signup from '../src/Signup';
import Login from '../src/Login';


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
      <Switch>
        <Route exact path='/' render={() => <Homepage/>} />
        <Route
        path="/signup"
        render={(routerProps) => (
          <Signup routerProps={routerProps}/>
        )}
        />
        <Route 
        path="/login"
        render={(routerProps) => (
          <Login routerProps={routerProps}/>
        )}
        />
         <>
         <Container fluid>
          <div className="routes-container">
          </div>
         </Container>
         </>
      </Switch>
      </Router>
   </div>
  );
};

const mapStateToProps = state => {
  return {user: state.auth}
}

export default connect(mapStateToProps, {setAuth})(App);
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
import Profile from "./components/Profile";


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

  const onLogin = (data, routerProps) => {
    if (data.jwt) {
      console.log("successfully logged in!");
      localStorage.setItem("token", data.jwt);
      setAuth({
        user: {
          id: data.user.id,
          username: data.user.username,
        },
      });
      routerProps.history.push("/homepage");
    }
  };

  const onSignup = (data, routerProps) => {
    if (data.jwt) {
      console.log("successfully signed up");
      localStorage.setItem("token", data.jwt);
      setAuth({
        user: {
          id: data.id,
          email: data.email,
          bio: data.bio,
        },
      });
      routerProps.history.push("/homepage");
    }
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    setAuth({ });
    window.history.pushState({}, "", "/login");
    window.location.reload();
  };

  return (
    <div className="app">
      <Router>
        <NavBar onLogout={onLogout}/>
      <Switch>
        <Route exact path="/" render={() => <Homepage/>} />
        <Route path="/signup" render={(routerProps) => (
          <Signup onSignup={onSignup}
          routerProps={routerProps}
          />
          )}/>
        <Route
						path='/login'
						render={(routerProps) => (
							<Login 
              onLogin={onLogin}
              routerProps={routerProps} />
						)}
					/>
          <Route exact path="/profile" render={() => <Profile/>} />
      </Switch>
      </Router>
   </div>
  );
};

const mapStateToProps = state => {
  return {user: state.auth}
}

export default connect(mapStateToProps, {setAuth})(App);
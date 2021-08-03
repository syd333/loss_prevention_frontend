import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { api } from "./services/Api";

const App = () => {
  const [auth, setAuth] = useState({ user: {} });


  useEffect(() => {
    const token = localStorage.token;
    if (token && token != undefined) {
      api.auth.getCurrentUser().then((data) => {
        setAuth({
          user: {
            id: data.user.id,
            username: data.user.username,
          },
        });
      })
    }
  }, [])

  const onLogin = (data, routerProps) => {
    if (data.jwt){
      console.log('successfully logged in!');
      localStorage.setItem("token", data.jwt);
      setAuth({
        user: {
          id: data.user.id,
          username: data.user.username,
        },
      });
    }
  }

}
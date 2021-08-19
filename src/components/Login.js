import React, { useState } from "react";
import { connect } from "react-redux";
import api from "../services/Api";
import { Link } from "react-router-dom";
import { setAuth } from "../actions/userAction";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import * as yup from "yup";

const signupSchema = yup.object().shape({
  email_address: yup
    .string()
    .email("Please enter a valid email")
    .required("Email cannot be blank"),
  password: yup
    .string()
    .min(4, "Password must be 4 characters or more")
    .max(16, "Password must be 16 characters or less")
    .required("Password cannot be blank"),
});

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  handleUsername = (data) => this.setState({ username: data });
  handlePassword = (data) => this.setState({ password: data });

  handleSubmit = (e) => {
    e.preventDefault();
    // api.auth.login(userData)
    //     .then(res => onLogin(res, routerProps))
  };
  //   const res = api.auth.login(userData)
  //   if (res.jwt) {
  //     localStorage.setItem('token', res.jwt);
  //     setAuth(res);
  render() {
    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-username"
              control={Input}
              label="username"
              placeholder="username"
              onChange={(e) => this.handleUsername(e.target.value)}
            />
            <Form.Field
              id="form-input-control-password"
              control={Input}
              label="password"
              placeholder="password"
              onChange={(e) => this.handlePassword(e.target.value)}
            />
            <Form.Field
              id="form-button-control-public"
              control={Button}
              content="Confirm"
              label="enter"
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { setAuth })(Login);

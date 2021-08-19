import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import api from '../services/Api';
import { Link } from "react-router-dom";
import { setAuth } from "../actions/userAction";
import { useForm } from "react-hook-form";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";

const Login = ({onLogin, routerProps}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { isLoggedIn } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAuth(username, password))
        .then(() => {
            this.props.history.push('/profile');
            window.location.reload();
        })
  };
  //   const res = api.auth.login(userData)
  //   if (res.jwt) {
  //     localStorage.setItem('token', res.jwt);
  //     setAuth(res);
    return (
      <div className="login">
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-username"
              control={Input}
              label="username"
              placeholder="username"
              onChange={onChangeUsername}
            />
            <Form.Field
              id="form-input-control-password"
              control={Input}
              label="password"
              placeholder="password"
              onChange={onChangePassword}
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

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { setAuth })(Login);

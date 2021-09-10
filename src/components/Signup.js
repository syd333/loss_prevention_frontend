import React, { useState, useRef } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import api from "../services/Api";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  // const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangeBio = (e) => {
    const bio = e.target.value;
    setBio(bio);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSignup = (e, data) => {
    e.preventDefault();
    // const res = api.auth.signup(username, email, bio, password);
    // if (res.jwt) {
    //     console.log("successfully logged in!");
    //   localStorage.setItem("token", res.jwt);
    //   setAuth(res);
    // }
    setSuccessful(false);
    // dispatch action type
    // dispatch();
  };

  return (
    <div className="signup">
      <Form onSubmit={handleSignup}>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-username"
            control={Input}
            label="username"
            placeholder="username"
            onChange={onChangeUsername}
          />
          <Form.Field
            id="form-input-control-username"
            control={Input}
            label="email"
            placeholder="email"
            onChange={onChangeEmail}
          />
          <Form.Field
            id="form-input-control-username"
            control={Input}
            label="bio"
            placeholder="bio"
            onChange={onChangeBio}
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
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Signup);

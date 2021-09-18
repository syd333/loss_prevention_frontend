import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import api from "../services/Api";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";

const Signup = ({onSignup, routerProps}) => {
  const { register, formState: {errors}, handleSubmit} = useForm();
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [bio, setBio] = useState("");
  // const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  // const dispatch = useDispatch();

  // const onChangeUsername = (e) => {
  //   const username = e.target.value;
  //   setUsername(username);
  //   console.log(username)
  // };

  // const onChangeEmail = (e) => {
  //   const email = e.target.value;
  //   setEmail(email);
  // };

  // const onChangeBio = (e) => {
  //   const bio = e.target.value;
  //   setBio(bio);
  // };

  // const onChangePassword = (e) => {
  //   const password = e.target.value;
  //   setPassword(password);
  // };

  const onSubmit = (data) => {
    const newUser = {
      username: data.username,
      email: data.email,
      bio: data.bio,
      password: data.password
    }
    console.log(newUser)
    api.auth.signup(newUser).then(res => onSignup(res, routerProps))
    // const res = api.auth.signup(username, email, bio, password);
    // if (res.jwt) {
    //     console.log("successfully logged in!");
    //   localStorage.setItem("token", res.jwt);
    //   setAuth(res);
    // }
    setSuccessful(false);
  };

  return (
    <div className="signup">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-username"
            control={Input}
            label ="username"
            name="username"
            placeholder="username"
            {...register("username")}
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="email"
            placeholder="email"
            {...register("email")}
            name="email"
            // onChange={onChangeEmail}
          />
          <Form.Field
            id="form-input-control-bio"
            control={Input}
            label="bio"
            placeholder="bio"
            {...register("bio")}
            name="bio"
            // onChange={onChangeBio}
          />
          <Form.Field
            id="form-input-control-password"
            control={Input}
            label="password"
            placeholder="password"
            {...register("password")}
            name="password"
            // onChange={onChangePassword}
          />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="submit"
            label="submit"
          />
        </Form.Group>
      </Form>
    </div>
  );
};


export default Signup;

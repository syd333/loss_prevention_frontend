import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../services/Api";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be 3 characters or more")
    .max(10, "Username must be 10 characters or less")
    .required("Username cannot be blank"),
  password: yup
    .string()
    .min(4, "Password must be 4 characters or more")
    .max(16, "Password must be 16 characters or less")
    .required("Password cannot be blank"),
});

const Login = ({ onLogin, routerProps }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const [successful, setSuccessful] = useState(false);

  const onSubmit = (data) => {
    const newUser = {
      username: data.username,
      password: data.password,
    };
    console.log(newUser);
    api.auth.login(newUser).then((res) => onLogin(res, routerProps));
    setSuccessful(false);
  };

  return (
    <div className="signup">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-username"
            control={Input}
            label="username"
            name="username"
            placeholder="username"
            {...register("username")}
          />
          <ErrorMessage
            errors={errors}
            name="username"
            render={({ message }) => (
              <label basic color="red" className="mt-2 text-danger">
                {message}
              </label>
            )}
          />
          <Form.Field
            id="form-input-control-password"
            control={Input}
            label="password"
            placeholder="password"
            {...register("password")}
            name="password"
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <label basic color="red" className="mt-2 text-danger">
                {message}
              </label>
            )}
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

export default Login;

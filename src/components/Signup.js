import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../services/Api";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";

const signupSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be 3 characters or more")
    .max(10, "Username must be 10 characters or less")
    .required("Username cannot be blank"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email cannot be blank"),
  bio: yup
    .string()
    .min(33, "Bio must be 33 characters or more")
    .max(260, "Bio must be 160 characters or less")
    .required("Bio cannot be blank"),
  password: yup
    .string()
    .min(4, "Password must be 4 characters or more")
    .max(16, "Password must be 16 characters or less")
    .required("Password cannot be blank"),
});

const Signup = ({ onSignup, routerProps }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signupSchema),
  });
  const [successful, setSuccessful] = useState(false);

  const onSubmit = (data) => {
    const newUser = {
      username: data.username,
      email: data.email,
      bio: data.bio,
      password: data.password,
    };
    console.log(newUser);
    api.auth.signup(newUser).then((res) => onSignup(res, routerProps));
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
            id="form-input-control-email"
            control={Input}
            label="email"
            placeholder="email"
            {...register("email")}
            name="email"
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <label basic color="red" className="mt-2 text-danger">
                {message}
              </label>
            )}
          />
          <Form.Field
            id="form-input-control-bio"
            control={TextArea}
            label="bio"
            placeholder="bio"
            {...register("bio")}
            name="bio"
          />
          <ErrorMessage
            errors={errors}
            name="bio"
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

export default Signup;

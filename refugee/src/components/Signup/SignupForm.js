import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Signup.scss";
import { baseUrl } from "../../util";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSetToken } from "../../store";

const Button = styled.button`
  text-align: center;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 5px;
  border-color: grey;
  color: black;
  margin: 10px auto;
  padding: 10px;
  font-size: 15px;
  width: 20%;
`;

// {
//     "email": "user@website.com" // must be a valid email
//     "story": "I want to be an admin very badly pls let me" // must be a string, max length 328 characters long
//     "username": "refugeeAdmin" // must be at least 4 charaters long
//     "password": "aPassword" // must be at least 6 charaters long
// }

export default function Signup() {
  const history = useHistory();
  const [token, dispatchSetToken] = useSetToken();
  async function handleSubmit(form) {
    try {
      const resRegister = await axios.post(`${baseUrl}/api/auth/register`, form);
      const resLogin = await axios.post(`${baseUrl}/api/auth/login`, form);
      dispatchSetToken(resLogin.data.token);  

      console.log(resLogin);
      return resLogin;
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="signup">
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={Yup.object({
          username: Yup.string()
            .min(4, "Must be 4 characters or more")
            .required("Required"),
          password: Yup.string()
            .min(6, "Must be 6 characters or more")
            .required("Required")
        })}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values).then(res => {
            resetForm();
            history.push("/");
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="signup form">
            <label htmlFor="username">username: </label>
            <Field
              id="username"
              type="text"
              name="username"
              placeholder="type username"
            />
            <ErrorMessage name="username" className="error" component="div" />
            <label htmlFor="password">password: </label>
            <Field
              autoComplete="off"
              id="password"
              type="password"
              name="password"
              placeholder="type password"
            />
            <ErrorMessage name="password" className="error" component="div" />
            <Button type="submit" className="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

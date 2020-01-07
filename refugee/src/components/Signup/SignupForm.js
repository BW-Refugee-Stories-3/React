import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Signup.scss";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../../util";

export default function Signup() {
  const history = useHistory();
  
  async function handleSubmit(form) {
    try {
      const res = await axios.post(`${baseUrl}/api/auth/register`, form);
      console.log(res);
      return res;
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
            <button type="submit" className="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

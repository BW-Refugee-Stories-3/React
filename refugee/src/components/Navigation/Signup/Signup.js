import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Signup.scss";
import { baseUrl } from "../../../util";
// {
//     "email": "user@website.com" // must be a valid email
//     "story": "I want to be an admin very badly pls let me" // must be a string, max length 328 characters long
//     "username": "refugeeAdmin" // must be at least 4 charaters long
//     "password": "aPassword" // must be at least 6 charaters long
// }
export default function Signup() {
  async function handleSubmit(form) {
    try {
      const res = await axios.post(`${baseUrl}/api/register`, form);
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="signup">
      <Formik
        initialValues={{ username: "", password: "", email: "", story: "" }}
        validationSchema={Yup.object({
          username: Yup.string()
            .min(4, "Must be 4 characters or more")
            .required("Required"),
          password: Yup.string()
            .min(6, "Must be 6 characters or more")
            .required("Required"),
          email: Yup.string()
            .email()
            .required("Required"),
          story: Yup.string()
            .max(328, "Must be 328  characters or less")
            .required("Required")
        })}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values).then(res => {
            resetForm();
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
            <label htmlFor="email">email: </label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="type email"
            />
            <ErrorMessage name="email" className="error" component="div" />
            <label htmlFor="story">story: </label>
            <Field
              id="story"
              as="textarea"
              name="story"
              placeholder="type story"
            />
            <ErrorMessage name="story" className="error" component="div" />
            <button type="submit" className="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

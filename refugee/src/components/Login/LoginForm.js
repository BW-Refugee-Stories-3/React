import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { baseUrl } from "../../util";
import { useHistory } from "react-router-dom";

const Button = styled.button`
text-align:center;
justify-content:center;
align-items:center;
background: transparent;
border-radius: 5px;
border-color: grey;
color:black;
margin: 10px auto;
padding:10px;
font-size: 15px;
width:20%;
`

const Form =styled.form`
display:flex;
flex-direction:column;
width:25%;
text-align:center;
justify-content:center;
margin:10px auto;
padding: 30px;
border: 1.5px solid #2B2B2B;
`

const Input = styled.input`
width:50%;
text-align:center;
justify-content:center;
margin:10px auto;
padding: 10px;
`

const Label = styled.label`
color:black;
font-size:20px;
`

const Title = styled.h1`
color:black;
font-size:2.5rem;
text-align:center;
justify-content:center;
align-items:center;`

export default function Login() {
  const history = useHistory();
  const initialState = { username: "", password: "" };
  const [form, setForm] = useState(initialState);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    axios
      .post(`${baseUrl}/api/auth/login`, form)
      .then(res => {
        console.log(res);
        window.sessionStorage.setItem("token", res.data.token);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setForm(initialState);
        history.push("/");
      });
  };

  const handleChanges = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
    console.log(event.target.name);
  };

  return (
    <div>
      <Title>Login Page</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="userNameInput">Username: </Label>
        <Input
          maxLength="20"
          placeholder="Username Here"
          id="userNameInput"
          name="username"
          value={form.username}
          onChange={handleChanges}
          type="text"
        />

        <Label htmlFor="userNamePassword">Password: </Label>
        <Input
          maxLength="20"
          placeholder="Password Here"
          id="userNamePassword"
          name="password"
          value={form.password}
          onChange={handleChanges}
          type="password"
        />
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}

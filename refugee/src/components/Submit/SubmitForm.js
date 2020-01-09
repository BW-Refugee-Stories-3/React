import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl } from "../../util";

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

const Forms = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;
  text-align: center;
  justify-content: center;
  margin: 10px auto;
  padding: 30px;
  border: 1.5px solid #2b2b2b;
`;

const Input = styled.input`
  width: 50%;
  text-align: center;
  justify-content: center;
  margin: 10px auto;
  padding: 10px;
`;

const TextArea = styled.textarea`
  width: 80%;
  text-align: center;
  justify-content: center;
  margin: 10px auto;
  padding: 10px;
`;

const Title = styled.h1`
  color: black;
  font-size: 2.5rem;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  color: black;
  font-size: 20px;
`;

export default function SubmitForm() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    date: "",
    textbody: ""
  });

  const onInputChange = ev => {
    const target = ev.target;
    setForm(prev => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post(`${baseUrl}/api/stories/process`, form).then(res => {
      console.log(res);
      setForm({
        name: "",
        location: "",
        date: "",
        textbody: ""
      });
    });
  };
  return (
    <div>
      <Title>Submit your story here:</Title>
      <Forms onSubmit={handleSubmit}>
        <Label htmlFor="nameInput">Name: </Label>

        <Input
          onChange={onInputChange}
          value={form.name}
          maxLength="15"
          placeholder="Name"
          id="nameInput"
          name="name"
          type="text"
        />
        <Label htmlFor="locationInput">Location: </Label>
        <Input
          value={form.location}
          onChange={onInputChange}
          maxLength="15"
          placeholder="Location"
          id="locationInput"
          name="location"
          type="text"
        />

        <Label htmlFor="dateInput">Date: </Label>
        <Input
          value={form.date}
          onChange={onInputChange}
          maxLength="15"
          placeholder="Date"
          id="dateInput"
          name="date"
          type="date"
        />

        <Label htmlFor="story">Your Story:</Label>

        <TextArea
          value={form.textbody}
          onChange={onInputChange}
          id="story"
          name="textbody"
          placeholder="What's your story?"
          maxLength="328"
          rows="30"
        />

        <Button>Submit Story</Button>
      </Forms>
    </div>
  );
}

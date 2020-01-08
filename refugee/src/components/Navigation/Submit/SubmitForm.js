import React, {useState} from 'react'
import styled from 'styled-components'

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

const Forms =styled.form`
display:flex;
flex-direction:column;
width:25%;
text-align:center;
justify-content:center;
margin:10px auto;
padding: 30px;
border: 1.5px solid #2B2B2B;
box-shadow: 5px 10px 18px #888888;


`

const Input = styled.input`

width:50%;
text-align:center;
justify-content:center;
margin:10px auto;
padding: 10px;


`

const TextArea = styled.textarea`
width:80%;
text-align:center;
justify-content:center;
margin:10px auto;
padding: 10px;

`


const Title = styled.h1`
color:black;
font-size:2.5rem;
text-align:center;
justify-content:center;
align-items:center




`


const Label = styled.label`
color:black;
font-size:20px;

`


export default function SubmitForm() {
    const [form, setForm] = useState({
        firstname:"",
        location:"",
        date:"",
        story:"",
    });

    const onInputChange = event => {
      setForm({
        ...form,
        [event.target.name]: event.target.value
      });
      console.log(event.target.name);
    };
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(form);
  }
    return (
      <div>
          <Title>Submit your story here:</Title>
          <Forms onSubmit={handleSubmit}>
          <Label htmlFor="nameInput">Name: </Label> 
         
              <Input onChange={onInputChange}
              maxLength='15'
              placeholder="Name"
              id="nameInput"
              name='firstName'
              type='text'
              />
              <Label htmlFor="locationInput">Location: </Label> 
                <Input onChange={onInputChange}
              maxLength='15'
              placeholder="Location"
              id="locationInput"
              name='location'
              type='text'
              />

            <Label htmlFor="dateInput">Date: </Label>   
                <Input onChange={onInputChange}
              maxLength='15'
              placeholder="Date"
              id="dateInput"
              name='date'
              type='date'
              />

              <Label htmlFor="story">Your Story:</Label>

              <TextArea onChange={onInputChange}
              id="story"
              name="story"
              placeholder="What's your story?"
              maxLength="328"
              />

              <Button>Submit Story</Button>

          </Forms>

      </div>
            
    
    )
}


import React from 'react'
import {Formik, Form, Field} from 'formik'
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


`
const Title = styled.h1`
color:black;
font-size:2.5rem;
text-align:center;
justify-content:center;
align-items:center;


`


export default function SubmitForm() {
    return (
      <div>
          <Title>Submit your story here:</Title>
          <Forms>
         
              <input
              maxLength='15'
              placeholder="Name"
              id="nameInput"
              name='firstName'
              type='text'
              />
                <input
              maxLength='15'
              placeholder="Location"
              id="locationInput"
              name='location'
              type='text'
              />
                <input
              maxLength='15'
              placeholder="Date"
              id="dateInput"
              name='date'
              type='date'
              />

              <textarea
              id="story"
              name="story"
              placeholder="What's your story?"
              />

              <Button>Submit Story</Button>

          </Forms>

      </div>
            
    
    )
}


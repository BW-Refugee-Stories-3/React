import React from 'react'
import styled from 'styled-components'

const Button = styled.button`

text-align:center;
justify-content:center;
align-items:center;
background: transparent;
border-radius: 5px;
border-color: darkgreen;
color:darkgreen;
margin: 10px;
padding:10px;
font-size: 15px;
`

const Form =styled.div`

text-align:center;
justify-content:center;
margin:10px;


`

const Label = styled.label`
color:darkgreen;
font-size:20px;

`

export default function Login() {
    return (
        <div>
           <Form>
               <Label htmlFor="userNameInput">Username: </Label> 
               <input 
               maxLength="20"
               placeholder="Username Here"
               id="userNameInput"
               name="username"
               type="text"
               />

           <Form>
                <Label htmlFor="userNamePassword">Password: </Label>
                <input 
               maxLength="20"
               placeholder="Password Here"
               id="userNamePassword"
               name="password"
               type="password"
               />
               <Button type="submit">Login</Button>

               </Form>
           
               
           </Form>
           
           
        </div>
    )
}

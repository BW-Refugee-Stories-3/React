import React from 'react'
import styled from 'styled-components'

export default function Login() {
    return (
        <div>
           <form>
               <label htmlFor="userNameInput">Username: </label> 
               <input 
               maxLength="20"
               placeholder="Username Here"
               id="userNameInput"
               name="username"
               type="text"
               />

            <form>
                <label htmlFor="userNamePassword">Password: </label>
                <input 
               maxLength="20"
               placeholder="Password Here"
               id="userNamePassword"
               name="password"
               type="password"
               />
               
               </form>  
           </form>
           <button>Submit</button>
           <button>Register</button>
        </div>
    )
}

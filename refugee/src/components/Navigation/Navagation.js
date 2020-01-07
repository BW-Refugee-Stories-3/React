import React from "react";
import "./Navagation.scss";
import { NavLink } from "react-router-dom";



export default function Navagation() {
  return (
    <div className="nav">
      <NavLink activeClassName="active" to="/story">Stories</NavLink>
      
        <NavLink activeClassName="active" to="/login">Login</NavLink>
      
        <NavLink activeClassName="active" to="/signup">Signup</NavLink>
     
    </div>
  );
}

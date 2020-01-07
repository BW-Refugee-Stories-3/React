import React from "react";
import "./Navagation.scss";
import { NavLink } from "react-router-dom";

export default function Navagation() {
  return (
    <div className="nav">
      <NavLink activeClassName="active" to="/stories">
        Stories
      </NavLink>

      <NavLink activeClassName="active" to="/login">
        Login
      </NavLink>

      <NavLink activeClassName="active" to="/process">
        Process
      </NavLink>
      <NavLink activeClassName="active" to="/signup">
        Signup
      </NavLink>
    </div>
  );
}

import React from "react";
import "./Navagation.scss";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Text = styled.span`
  color: red;
  font-size: 3rem;
`;

export default function Navagation() {
  return (
    <div className="nav">
      <Text>
        <NavLink activeClassName="active" to="/login">Login</NavLink>
      </Text>
      <Text>
        <NavLink activeClassName="active" to="/signup">Signup</NavLink>
      </Text>
    </div>
  );
}

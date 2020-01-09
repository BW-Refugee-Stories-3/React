import React from "react";
import "./Navagation.scss";
import { NavLink } from "react-router-dom";
import { useSetToken } from "../../store";

export default function Navagation() {
  const [token, setToken] = useSetToken();
  return (
    <div className="nav">
      <a
        href="
https://refugee-stories-ui.netlify.com/"
      >
        Home
      </a>
      <NavLink activeClassName="active" to="/submitstory">
        Submit Story
      </NavLink>

      <NavLink activeClassName="active" to="/stories">
        Stories
      </NavLink>

      {token ? (
        <>
          <NavLink activeClassName="active" to="/process">
            Process
          </NavLink>
          <NavLink
            onClick={() => {
              setToken(undefined);
            }}
            exact
            to="/"
          >
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <NavLink activeClassName="active" to="/login">
            Login
          </NavLink>
          <NavLink activeClassName="active" to="/signup">
            Signup
          </NavLink>
        </>
      )}
    </div>
  );
}

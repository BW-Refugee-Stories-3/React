import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useGetToken } from "../../store";

export default function PrivateRoute({ component: Component, ...rest }) {
  const [token] = useGetToken();

  return (
    <Route
      {...rest}
      render={props =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

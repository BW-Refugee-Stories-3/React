import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navagation from "./components/Navigation/Navagation";
import LoginForm from "./components/Login/LoginForm";
import SignupForm from "./components/Signup/SignupForm";
import Stories from "./components/Stories/Stories";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Process from "./components/Process/Process";
import ProcessId from "./components/ProcessId/ProcessId";

function App() {
  return (
    <>
      <div className="App">
        <Navagation />
      </div>

      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/stories" component={Stories} />

      <PrivateRoute path="/process" component={Process} />
      <PrivateRoute path="/process/:id" component={ProcessId} />
    </>
  );
}

export default App;

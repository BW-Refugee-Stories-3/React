import React from "react";
import "./App.css";
import Navagation from "./components/Navigation/Navagation";
import SubmitForm from "./components/Submit/SubmitForm";
import { Route } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import SignupForm from "./components/Signup/SignupForm";
import Stories from "./components/Stories/StoriesPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Process from "./components/Process/Process";
import ProcessId from "./components/ProcessId/ProcessId";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navagation />
      <Route path="/submitstory" component={SubmitForm} />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/stories" component={Stories} />

      <PrivateRoute exact path="/process" component={Process} />
      <PrivateRoute path="/process/:id" component={ProcessId} />

      <Footer />
    </div>
  );
}

export default App;

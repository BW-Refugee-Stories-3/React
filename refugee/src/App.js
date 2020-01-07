import React from "react";
import "./App.css";
import Navagation from "./components/Navigation/Navagation";
import LoginForm from "./components/Navigation/Login/LoginForm";
import SignupForm from "./components/Navigation/Signup/SignupForm";
import SubmitForm from "./components/Navigation/Submit/SubmitForm";
import Stories from "./components/Stories/StoriesPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Navagation />
      </div>

      <Route path="/submitstory" component={SubmitForm}/>
       <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/stories" component={Stories} />
    </>
     
  );
}

export default App;

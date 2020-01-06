import React from "react";
import "./App.css";
import Navagation from "./components/Navigation/Navagation";
import Login from "./components/Navigation/Login/Login";
import Signup from "./components/Navigation/Signup/Signup";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Navagation />
      </div>

      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </>
  );
}

export default App;

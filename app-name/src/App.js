import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Login.css from "./Login"
import Login from "./components/Login";
// import SignUp from "./components/SignUp";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fitness Anywhere</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Set It Off
        </a>
        <Login />
      </header>
    </div>
  );
}

export default App;

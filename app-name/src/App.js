import React, { useEffect, useState } from "react";
// import { useHistory } from 'react-router-dom';
import schema from './formSchema';
import axios from 'axios';
import * as yup from 'yup';
// import "./Login.css";

const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  password: '',
  ///// DROPDOWN /////
  role: '',
  ///// RADIO BUTTONS /////
  civil: '',
  ///// CHECKBOXES /////
  hiking: false,
  reading: false,
  coding: false,
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code></code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Set It Off
        </a>
      </header>
    </div>
  );
}

export default App;

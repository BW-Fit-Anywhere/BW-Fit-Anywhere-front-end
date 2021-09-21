import React, { useState } from "react";
// import axios from 'axios';
// import axiosWithAuth from '../utils/axiosWithAuth';
// import { useHistory } from 'react-router';

const initialFormValues = {
  name: "",
  email:"",
  username: "",
  password: "",
  role: ""
}

const initialDisabled = true;


const SignUp = () => {
  const [users, setUsers ] = useState({});
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);

  const {name, email, username, password, role} = users;

  const inputChange = (name, value) => {
    // validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
}

  const onChange = evt => {
    const { name, value } = evt.target;
    const valueToUse = value;
    inputChange(name, valueToUse);
}

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      role: formValues.role.trim()
    }
    console.log(newUser);
}

  const onSubmit = event => {
    event.preventDefault()
    formSubmit()
}


  return(
    <div>
      <header>
        <h1>Sign up for Fitness Anywhere!</h1>
      </header>
      <form id="signup-form" onSubmit={onSubmit}>
        <div>
          <p>Full Name: </p>
          <input id="name-input" name="name" type="text" onChange={onChange} /> 
        </div>
        <div>
          <p>Email: </p>
          <input id="email-input" name="email" type="text" onChange={onChange} />
        </div>
        <div>
          <p>Username: </p>
          <input id="username-input" name="username" type="text" onChange={onChange} />
        </div>
        <div>
          <p>Password: </p>
          <input id="password-input" name="password" type="text" onChange={onChange} />
        </div>
        <div>
          <p>Required!</p>
          <select id='role-dropdown' name='role' value={role}>
              <option value=''>Select your role</option>
              <option value='client'>Client</option>
              <option value='instructor'>Instructor</option>
          </select>
        </div>
        <div>
          <button id="submit-button" type="submit" disabled={!disabled}>SUBMIT</button>
        </div>
      </form>
    </div>
  )

}
export default SignUp;
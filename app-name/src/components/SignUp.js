import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import schema from "./formSchemaSignUp";
import axios from 'axios';
// import axiosWithAuth from '../utils/axiosWithAuth';
// import { useHistory } from 'react-router';

const initialFormValues = {
  name: "",
  email:"",
  username: "",
  password: "",
  role_name: ""
}

const initialFormErrors = {
  name: "",
  email:"",
  username: "",
  password: "",
  role_name: ""
}

const initialDisabled = true;
const initialUsers = [];


const SignUp = () => {
  const [users, setUsers ] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const {role_name} = users;

  const postNewUser = newUser => {
    axios.post('https://anywhere-fitness-main.herokuapp.com/api/auth/register', newUser)
      .then(res => {
        setUsers([res.data, ...users]);   // when submit is clicked and it goes to post new user, this line causes errors in console.
        setFormValues(initialFormValues);
      }).catch(err => {
        console.error(err);
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  const inputChange = (name, value) => {
    validate(name, value);
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
      role_name: formValues.role_name.trim()
    }
    postNewUser(newUser);   
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
          <label>Full Name: </label>
          <input id="name-input" name="name" type="text" onChange={onChange} /> 
        </div>
        <div>
          <label>Email: </label>
          <input id="email-input" name="email" type="text" onChange={onChange} />
        </div>
        <div>
          <label>Username: </label>
          <input id="username-input" name="username" type="text" onChange={onChange} />
        </div>
        <div>
          <label>Password: </label>
          <input id="password-input" name="password" type="password" onChange={onChange} />
        </div>
        <div>
          <label>Select your role</label>
          <select id='role-dropdown' name='role_name' value={role_name} onChange={onChange}>
              <option value=''>Select a role</option>
              <option value='client'>Client</option>
              <option value='client'>Instructor</option>
          </select>
        </div>
        <div>
          <button id="submit-button" type="submit" disabled={disabled}>SUBMIT</button>
        </div>
      </form>
    </div>
  )

}
export default SignUp;
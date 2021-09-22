import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import schema from './formSchema';
import axios from 'axios';
// import App  from '../App';
// import '../Login.css';

const initialFormValues = {
  username: '',  
  password: ''
}

const initialFormErrors = {
  username: '',
  password: ''
}

// const initialClients = []
const initialDisabled = true

const Login = () => {

  const [clients, setClients] = useState([])  
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const postClient = newClient => {
    axios.post('', newClient)
      .then(res => {
        setClients([res.data, ...clients]);
        setFormValues(initialFormValues);
      }).catch(err => {
        console.error(err);
        setFormValues(initialFormValues);
      })
  }

  const formSubmit = (e) => {
   e.preventDefault();
   const newClient = {
      username: formValues.username.trim(),
      password: formValues.password.trim()
    }
   return setClients(newClient)
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='login-box'>
      <h2>Login</h2>
      <form onSubmit={formSubmit}>
        <div className='user-box'>
          <input
            id="username"
            value={formValues.username}
            name="username"
            type="text"
            onChange={inputChange}
          /><label>Username</label>
        </div>
        <div className='user-box'>
          <input
            id="password"
            value={formValues.password}
            password="password"
            type="password"
            onChange={inputChange}
          />
          <label>Password</label>
        </div>
        <a href='button'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  )
}
export default Login;
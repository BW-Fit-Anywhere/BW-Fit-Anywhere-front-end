import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import schema from './formSchema';
import axios from 'axios';
// import App  from '../App';
import '../Login.css';
// import { useFormik } from "formik";

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

  console.log(formErrors);

  const postClient = newClient => {
    axios.post('https://anywhere-fitness-main.herokuapp.com/api/auth/login', newClient)
      .then(res => {
        setClients([res.data, ...clients]);
        setFormValues(initialFormValues);
      }) 
      .catch(err => {
        console.error(err);
        setFormValues(initialFormValues);
      })
  }

  const onChange = evt => {
    const { name, value } = evt.target;
    validate(name, value)
    setFormValues({ ...formValues, [name] : value});
  }

  const formSubmit = (e) => {
    e.preventDefault();
    const newClient = {
      username: formValues.username.trim(),
      password: formValues.password.trim()
    }
    postClient(newClient)
    
    return setClients(newClient)
  }
  
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  
  return (
    <div className='login-box'>
      <h2>Login</h2>
      <form id='login-form'onSubmit={formSubmit}>
        <div className='user-box'>
          <input
            id="username"
            value={formValues.username}
            name="username"
            type="text"
            onChange={onChange}
          />
          <label>Username</label>
          { formErrors.username.length > 0 ? <p style={{color: 'orange'}}>{ formErrors.username }</p> : null }
        </div>
        <div className='user-box'>
          <input
            id="password"
            value={formValues.password}
            name="password" 
            type="password"
            onChange={onChange}
          />
          <label>Password</label>
          { formErrors.password.length > 0 ? <p style={{color: 'orange'}}>{ formErrors.password }</p> : null }
        </div>
        <a href='submit-button' type='submit' disabled={disabled}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit!
        </a>
      </form>
    </div>
  )
}
export default Login;
import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import schema from './formSchema';
// import App  from '../App';
import '../Login.css';

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

  // const postNewFriend = newFriend => {
  //   axios.post('http://buddies.com/api/friends', newFriend)
  //     .then(res => {
  //       setFriends([res.data, ...friends]);
  //       setFormValues(initialFormValues);
  //     }).catch(err => {
  //       console.error(err);
  //       setFormValues(initialFormValues);
  //     })
  // }

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
    <div className='container'>
      <header><h1>Login</h1></header>
      <form onSubmit={formSubmit}>
        <label>
          <input/>
          
        </label>
        <label>
        <input/>
        </label>
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      </form>
    
    </div>
  )

}
export default Login;
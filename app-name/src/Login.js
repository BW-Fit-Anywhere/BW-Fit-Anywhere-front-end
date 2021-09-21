// 1. User can create/register as a `client` and login with the registered credentials.

// 2. User can create/register as an `instructor` by entering an additional Auth Code during signup, and can login with the registered credentials.

import React, { useEffect, useState } from "react";
// import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import "./Login.css";

const initialFormValues = {
    username: '',          // text inputs
    password: '',
}

const initialFormErrors = {
    username: '',
    password: '',
}

const initialClient = []
const initialInstructor = []
const initialClientDisabled = true
const initialInstructorDisabled = true

export default function App() {
    
}

// function Login(props) {
//     const [loginForm, setLoginForm] = useState({
//       username: '',
//       password: '',
//     })
//     const { push } = useHistory()

//     const { setTokenState } = props

//     useEffect(() => {
//       const token = localStorage.getItem('token')
//       if (token) {
//         push('')
//       }
//     },[])

//     function onChangeHandler(e) {
//         e.target.name === 'username' ? 
//         setLoginForm({...loginForm, username: e.target.value}) : 
//         setLoginForm({...loginForm, password: e.target.value})
//       }
    
//       function onSubmit(e) {
//         e.preventDefault()
//         axios.post('https://bw-fit-anywhere.herokuapp.com/api/auth/login', loginForm)
//           .then(res => {
//             console.log(res)
//             localStorage.setItem('token', res.data.token)
//             setTokenState(true)
//             push('')
//           })
//           .catch(err => console.log(err))
//       }
    
//       return (
//         <div>
//           <h2>Login</h2>
//           <form>
//             <input 
//               placeholder='Username' 
//               name='username' 
//               value={loginForm.username} 
//               type='text'
//               onChange={onChangeHandler}/>
              
//             <input 
//               placeholder='Password' 
//               name='password' 
//               value={loginForm.password}
//               type='password'
//               onChange={onChangeHandler}/>
//             <br></br>
//             <a onClick={onSubmit} 
//               href="#">
//               Submit
//             </a>
//           </form>
//         </div>
//       )
//     }
    
//     export default Login;
    
import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css";

function NavBar() {
   // LOGOOUT
  // const handleLogout = (e) => {
  //   e.preventDefault();
  //    axiosWithAuth()
  //     .post("https://anywhere-fitness-main.herokuapp.com/logout")
  //     .then((res) => {
  //       localStorage.removeItem("token");
  //       window.location.href = `$window.location.origin}/login`;
  //     })
  //     .catch(err => console.log({ err }));

  // }


  return (
    <div>
      
      <nav className="container">
        <NavLink exact to="/">
          <h1>Anywhere Fitness</h1>
        </NavLink>
        <ul className="steps">
          <li>
            <NavLink exact to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup">
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/login" >  {/* onClick={handleLogout}*/}
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
        
      
    </div>

  )
}

export default NavBar

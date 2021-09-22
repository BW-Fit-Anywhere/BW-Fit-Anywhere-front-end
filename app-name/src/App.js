import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Login.css from "./Login"
import Login from "./components/Login";
// import SignUp from "./components/SignUp";
=======
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

>>>>>>> 0c0e1c1 (added and login routes)


function App() {
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
<<<<<<< HEAD
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
=======
    <div>
      <Router>
        <header>Fit Anywhere
        {/* <a href="/login" onClick={handleLogout}>logout</a> */}
        </header>

        <Switch>
          {/* define Private Routes:
            <PrivateRoute path="/classes" component={classes}/> 
            <PrivateRoute path="/client" component={client}/> 
            <PrivateRoute path="/instructor" component={instructor}/> 
            
          */}


          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>


        </Switch>

      </Router>
      <footer>
        <h4>Anywhere Fitness APP Copyright 2021</h4> 
        <p>Build Team: Jeong Pak, Klove Adams, Leo Oládimú, Michael Guerrero, Priscila Monteiro, Rimsha Saleem.</p>
      
      </footer>
>>>>>>> 0c0e1c1 (added and login routes)
    </div>
    
  );
}

export default App;

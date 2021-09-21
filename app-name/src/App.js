import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";



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
    </div>
    
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";



function App() {
 

  return (
    <div>
      <Router>
        <NavBar/>
        <div className="formContainer"> 
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
        </div>

      </Router>

      <Footer/>
     
    </div>
    
  );
}

export default App;

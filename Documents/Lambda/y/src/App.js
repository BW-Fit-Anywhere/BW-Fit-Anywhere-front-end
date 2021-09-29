import React from 'react';
import './App.css';
import axios from 'axios';
import User from './User';

function App() {
    return (
        <div className='App'>
            <h1>Github Usercard</h1>
            <User/>
        
        </div>
    );
}

export default App;
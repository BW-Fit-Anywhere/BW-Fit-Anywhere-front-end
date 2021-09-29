import axios from 'axios';
import React, { Component } from 'react';

class User extends Component {

state = {
    user: null
}

componentDidMount() {
    axios.get('https://api/github.com/users/leooladimu')
    .then((r) => console.log(r))
    .catch((r) => console.error(r));
}

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default User;
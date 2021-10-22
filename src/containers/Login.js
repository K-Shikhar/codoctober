import React, { Component } from 'react';
import LoginComponent from '../components/LoginPage'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return <div>
            <LoginComponent />
        </div>;
    }
}

export default Login;
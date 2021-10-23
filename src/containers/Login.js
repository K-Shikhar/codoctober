import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/auth'
import LoginComponent from '../components/LoginPage'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGettingSubmitted: false,
            email: props.auth.lastUsedEmail || "",
            password: "",
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(loginUser(this.state.email, this.state.password));
    };

    render() {
        const { email, password } = this.state;
        const { loginInitiated } = this.props.auth;
        console.log(email, password);
        return (
            <LoginComponent
                email={email}
                password={password}
                isGettingSubmitted={loginInitiated}
                handleChange={this.handleChange}
                handleFormSubmit={this.handleFormSubmit}
            />
        );
    }
}


const mapStateToProps = state => ({
    auth: state.authReducer
});

export default connect(mapStateToProps)(Login);
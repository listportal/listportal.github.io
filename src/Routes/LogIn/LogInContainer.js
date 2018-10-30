import React, { Component } from "react";
import LogInView from "./LogInView";
import { withRouter } from "react-router";
import firebase, { provider } from './../../firebase';

class LogInContainer extends Component {
  handleLogIn = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

    handleGoogleLogIn = async event => {
        event.preventDefault();
        /*firebase.signInWithPopup(provider)*/
        try {
            const user = await firebase
                .auth()
                .signInWithPopup(provider)
            this.props.history.push("/");
        } catch (error) {
            alert(error);
        }
    };

  handleSignUp = () => {
    this.props.history.push('/SignUp')
  }

  render() {
    return <LogInView onSubmit={this.handleLogIn} onClick={this.handleSignUp} handleGoogleLogIn={this.handleGoogleLogIn}/>;
  }
}

export default withRouter(LogInContainer);
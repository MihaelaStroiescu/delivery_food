import React, { Component } from 'react';
// import './App.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import UserContext from '../../shared/user.context';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    }
  }
  responseFacebook = (response) => {
    //console.log(response);
    console.log(this.context);
    this.context.handleUserChange(response);
    this.setState({
      redirect: true
    });
  }

  responseGoogle = (response) => {
    console.log(response);
    
    this.context.handleUserChange(response.profileObj);
    this.setState({
      redirect: true
    });
  }

  render() {
      if (this.state.redirect === true) {
        return <Redirect to='/' />
      }
      return (
        <UserContext.Consumer>
          { ({ user, handleUserChange }) => (
            <div className="App">
                <h2>LOGIN WITH:</h2>

                <FacebookLogin
                    appId="1992350001069404" //APP ID NOT CREATED YET
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                />
                <br />
                <br />
                <GoogleLogin
                    clientId="903697692149-j4q2rsmltp40gik0lb4ciqk3m9d59e4k.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />

            </div>
          ) }
          </UserContext.Consumer>
    );
  }
}

Login.contextType = UserContext; 

export default Login;
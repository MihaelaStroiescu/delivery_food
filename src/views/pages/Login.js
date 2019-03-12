import React, { Component } from 'react';
// import './App.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        date: []
      }
    }

  render() {

    const responseFacebook = (response) => {
      console.log(response);      
    }

    const responseGoogle = (response) => {
      console.log(response);
    }

      return (
          <div className="App">
              <h2>LOGIN WITH:</h2>

              <FacebookLogin
                  appId="1992350001069404" //APP ID NOT CREATED YET
                  fields="name,email,picture"
                  callback={responseFacebook}
              />
              <br />
              <br />
              <GoogleLogin
                  clientId="903697692149-j4q2rsmltp40gik0lb4ciqk3m9d59e4k.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                  buttonText="LOGIN WITH GOOGLE"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
              />
              <h3>Welcome </h3>
          </div>
    );
  }
}

export default Login;
import React, { Component } from 'react';
import '../../App.css';
import '../../Login.css';
import UserContext from '../../shared/user.context';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ModalLogin from './ModalLogin';
import { Button, ButtonToolbar } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


class Login extends Component {
  constructor(props) {
      super(props); 
      this.apiUrl = "http://localhost:3004/users";
      this.state = {
        id: 0,
        user: {},
        name: '',
        email: '',
        password: '',
        redirect: false,
        modalShow: false,
        userExist: []
      };    
  }

  async componentDidMount() {
    const resp = await axios.get(this.apiUrl);
    console.log(resp.data);
    this.setState({userExist: resp.data});
  }

   checkuser(userExist) {
     //console.log({userExist});
   }

  responseFacebook = (response) => {
    //console.log(response);
    //console.log(this.context);
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
      let modalClose = () => this.setState({ modalShow: false });
      
      return (
        <UserContext.Consumer>
          { ({ user, handleUserChange }) => (
            <div className="App">
                <h2>Welcome, {user.name} { this.state.userExist.map(user => user.name)}</h2>
              <ButtonToolbar>
                <Button variant="primary" onClick={() => this.setState({ modalShow: true })}> Log In </Button>
                <ModalLogin show={this.state.modalShow} onHide={modalClose} />
              </ButtonToolbar>                
                <div>
                  {/* <p>{JSON.stringify(this.state)}</p>   */} 
                  
                  <p>{ this.state.userExist.map(user => user.name)}</p> 
                  
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
                         
            </div>
          ) }
          </UserContext.Consumer>
    );
  }
}

Login.contextType = UserContext;

export default Login;

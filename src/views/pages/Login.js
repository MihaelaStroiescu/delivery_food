import React, { Component } from 'react';
import '../../App.css';
import '../../Login.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import UserContext from '../../shared/user.context';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ModalLogin from './ModalLogin';
import { Container, Row, Col, Image,Button, ButtonToolbar } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
      super(props); 
      this.apiUrl = "http://localhost:3004/menu";
      this.state = {
        admin: [],
        id: 1,
        name: '',
        email: '',
        password: '',
        redirect: false,
        modalShow: false
      };    
  }

  async componentDidMount() {
    // const resp = await axios.post(this.apiUrl, {admin:
     
    //     { 
    //       id:1,
    //       name: 'Daniel',
    //       email: "ancutadaniel@gmail.com",
    //       password: 'Start1234?'
    //     }     
    
    // });

    const newResp = await axios.get(this.apiUrl); 
      this.setState({admin: newResp.data});
      console.log(newResp.data);
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
      let modalClose = () => this.setState({ modalShow: false });
      return (
        <UserContext.Consumer>
          { ({ user, handleUserChange }) => (
            <div className="App">
                <h2>Welcome, {user.name}</h2>
              <ButtonToolbar>
                <Button
                  variant="primary"
                  onClick={() => this.setState({ modalShow: true })}
                >
                 Log In
              </Button>

                <ModalLogin
                  show={this.state.modalShow}
                  onHide={modalClose}
                />
              </ButtonToolbar>                
                <div>

                  {this.state.admin.map( admin => <p>{admin.id}</p>)}                  
                </div>              

            </div>




          ) }
          </UserContext.Consumer>
    );
  }
}

Login.contextType = UserContext;

export default Login;

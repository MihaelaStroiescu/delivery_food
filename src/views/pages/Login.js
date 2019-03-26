import React, { Component } from 'react';
import '../../App.css';
import '../../Login.css';
import UserContext from '../../shared/user.context';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ModalLogin from './ModalLogin';
import { Button, ButtonToolbar } from 'react-bootstrap';

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
        userExit: []
      };
  }

  async componentDidMount() {
    const resp = await axios.get(this.apiUrl)
    console.log(resp.data);
    this.setState({userExit: resp.data});
  }

  //     checkUser(user) {
  //       console.log(user.name);

  //     }
  // checkUser()




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
                <Button variant="primary" onClick={() => this.setState({ modalShow: true })}> Log In </Button>
                <ModalLogin show={this.state.modalShow} onHide={modalClose} />
              </ButtonToolbar>
                <div>
                  <p>{JSON.stringify(this.state)}</p>
                  <p>{this.state.userExit.map(user => user.name) }</p>
                </div>
            </div>
          ) }
          </UserContext.Consumer>
    );
  }
}

Login.contextType = UserContext;

export default Login;

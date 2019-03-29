import React  from 'react';
import '../../App.css';
import '../../SignUp.css';
import UserContext from '../../shared/user.context';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';



class SignUp extends React.Component {
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
        validate: false,
        userExist: []
      };

      this.inputChanged = this.inputChanged.bind(this);
      this.formSubmit = this.formSubmit.bind(this);
  }

  async inputChanged(e) { // hot plate
    const value = e.currentTarget.value;
    const user = this.state.user;
    user[e.currentTarget.id] = value;
    this.setState({user});
  }
  
  async formSubmit(e) {
    e.preventDefault();
    const resp =  await axios.post(this.apiUrl, this.state.user);
    console.log(resp.data);
    this.setState({validated: true, user: resp.data});
  }

  responseFacebook = (response) => {
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
      const {validated} = this.state;
      return (
        <UserContext.Consumer>
          { ({ user, handleUserChange }) => (
            <Form noValidate validated= {validated} onSubmit={e => this.formSubmit(e)} >
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control required id="name" type="text" value={this.state.user.name} onChange={this.inputChanged} placeholder="Name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Please enter a name.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control required id="email" type="email" value={this.state.user.email}  onChange={this.inputChanged} placeholder="Enter email"  />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control required id="password" type="password" value={this.state.user.password}  onChange={this.inputChanged} placeholder="Password" />
                <Form.Control.Feedback>Super Password!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Please set a strong password.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Check id="formBasicChecbox" type="checkbox" label="Keep me logged in to my account" />
            </Form.Group>
            <Button type="submit" variant="outline-secondary">Login</Button>
         </Form>
            // <div className="App">
            //     <h2>Welcome, {user.name} { this.state.userExist.map(user => user.name)}</h2>
            //   {/* <ButtonToolbar>
            //     <Button variant="primary" onClick={() => this.setState({ modalShow: true })}> Log In </Button>
            //     <ModalLogin show={this.state.modalShow} onHide={modalClose} />
            //   </ButtonToolbar> */}
            //     <div>
            //       {/* <p>{JSON.stringify(this.state)}</p>   */}
            //       <p>{ this.state.userExist.map(user => user.name)}</p>                  
            //     </div>
            // </div>
          ) }
          </UserContext.Consumer>
    );
  }
}

SignUp.contextType = UserContext;

export default SignUp;

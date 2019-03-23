import React from 'react';
import Modal from 'react-bootstrap/Modal';
import  { Button , Form  } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import UserContext from '../../shared/user.context';


class ModalLogin extends React.Component {
    constructor(...args) {
        super(...args); 
        this.apiUrl = "http://localhost:3004/users";
        this.state = {
          id: 0, 
          user: {},       
          name: '',
          email: '',
          password: '',
          redirect: false,
          modalShow: false,
          validated: false
        };
        
        this.inputChanged = this.inputChanged.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
  
    async componentDidMount() {
    //   const resp = await axios.post(this.apiUrl);
  
    //   console.log(resp.data);
    //   this.setState(resp.data);
    }
  
     inputChanged(e) {
      const value = e.currentTarget.value;
      const user = this.state.user;
      const resp =  axios.get(this.apiUrl);      
      console.log(user.name); 
      console.log(resp.data); 
      if (user.name === resp.data)  {
        alert('user exist');
      } 
      
      user[e.currentTarget.id] = value;

       
             
      this.setState({user});
    }

    
    async formSubmit(e) {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.setState({ validated: true });
        
        //console.log(this.state.user);
        const resp =  await axios.post(this.apiUrl, this.state.user);
       // console.log(resp);
    } 

    render() {
        const { validated } = this.state;
        return (
            <UserContext.Consumer>
          { ({ user, handleUserChange }) => (
              
            <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Log in to your account 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>                
                    <Form noValidate validated= {validated} onSubmit={e => this.formSubmit(e)} >
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required id="name" type="text" value={this.state.user.name} onChange={this.inputChanged} placeholder="Name" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please enter a name.</Form.Control.Feedback>
                        </Form.Group>                       
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required id="email" type="email" value={this.state.user.email}  onChange={this.inputChanged} placeholder="Enter email"  />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required id="password" type="password" value={this.state.user.password}  onChange={this.inputChanged} placeholder="Password" />
                            <Form.Control.Feedback>Super Password!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please set a strong password.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Keep me logged in to my account" />
                        </Form.Group>
                        <Button type="submit" variant="outline-secondary">Submit</Button>
                     </Form>
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
                 
                    <p>New to YourMenu.menu?<span> <Button variant="outline-secondary">Sign up here</Button></span></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
            ) }
            </UserContext.Consumer>
        );
    }
}

export default ModalLogin;
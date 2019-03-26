import React from 'react';
import Modal from 'react-bootstrap/Modal';
import  { Button , Form } from 'react-bootstrap';
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
          checkUser: '',
          redirect: false,
          modalShow: false,
          validated: false
        };
        
        this.inputChanged = this.inputChanged.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
  
    async componentDidMount() {
        
    }


    

  
     async inputChanged(e) {
      const value = e.currentTarget.value;
      const user = this.state.user;
      const url = this.apiUrl + "/?name=" + value;  
      
      
      user[e.currentTarget.id] = value;    
      const checkUser = (await axios.get(url)).data;
      //console.log(checkUser);
      this.setState({user, checkUser});
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
       console.log(resp);
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
                        <Button type="submit" variant="outline-secondary">Submit</Button>                
                     </Form>
                     <p className="facebook"><FacebookLogin appId="1992350001069404" fields="name,email,picture" callback={this.responseFacebook}/></p>
                     <p className="google"> <GoogleLogin clientId="903697692149-j4q2rsmltp40gik0lb4ciqk3m9d59e4k.apps.googleusercontent.com" onSuccess={this.responseGoogle} onFailure={this.responseGoogle}/></p>
                 
                    <p className="new">New to YourMenu.menu?</p>
                    <span className="sign"> <Button variant="outline-secondary">Sign up here</Button></span>
                    
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
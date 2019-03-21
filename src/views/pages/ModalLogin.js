import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import  { Button , Form ,  } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { FormGroup } from 'react-bootstrap';


class ModalLogin extends React.Component {
    render() {
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Log in to your account
              </Modal.Title>
                </Modal.Header>
                <Modal.Body>                  
                    
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Keep me logged in to my account" />
                            </Form.Group>
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




        );
    }
}

export default ModalLogin;
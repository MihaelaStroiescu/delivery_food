import React from 'react';
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logo } from '../images/index.js';


class MainMenu extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="sm">
                <LinkContainer to='/'>
                    <Navbar.Brand>
                        <img src= {logo} width="40" height="40" className="d-inline-block align-top" alt="React Bootstrap logo" />
                    </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <LinkContainer exact to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/order">
                            <Nav.Link>Order</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default MainMenu;

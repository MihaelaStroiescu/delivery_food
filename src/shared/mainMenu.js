import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';



class MainMenu extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand = "sm">
                <LinkContainer to='/'>
                    <Navbar.Brand> {this.props.site_name}</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
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
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default MainMenu;
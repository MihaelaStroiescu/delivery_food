import React from 'react';
//import UserContext from '../../shared/user.context';
import { logo, miha, dan, about_us } from './../images/index.js';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../views/footer.css';
import axios from 'axios';



class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
        };
        this.apiUrl = "http://localhost:3004/menu";

    }

    async componentDidMount() {
        const resp = await axios.get(this.apiUrl);
        this.setState({ category: resp.data });
        console.log(resp.data);
    }


    render() {
        return (
            <>
            <Container className="footer_wrapper" fluid>
            <Row className="footer_first_row">
                <Col md={2} xs={4} className="footer_order">
                    <h3>Your Menu</h3>
                    <img src={logo} className="App-logo" alt="menu" />
                </Col>
                <Col md={6} xs={8} className="footer_order">
                    {/* <img src={about_us} className="footer_about_us" alt="Contact" /> */}
                    <h4 className="footer_title">Order</h4>
                    {this.state.category.map(categ =>
                        <Col sm={4} xs={10} className="footer_categ" key={categ.id}>
                            <Link to={"/ordermenu/" + categ.id}>
                                <span className="footer_name_categ" key={categ.name}>{categ.name}</span>
                            </Link>
                        </Col>
                    )}
                </Col>
                <Col md={2} xs={6} className="footer_contact">
                    <h4 className="footer_title">Call: 0745 099 210</h4>
                    <img className="footer_contact_img" src={miha} alt="Miha" />
                </Col>
                <Col md={2} xs={6} className="footer_contact">
                    <h4 className="footer_title">Call: 0745 099 210</h4>
                    <img className="footer_contact_img" src={dan} alt="Dan" />
                </Col>
            </Row>

                    <div>
                        <FontAwesomeIcon icon="check-square" />
                        Favorite beverage: <FontAwesomeIcon icon={['fab', 'google']} />
                    </div>
                    <div>
                        <a href="tel:+6494461709">61709</a>
                        <FontAwesomeIcon icon="check-square" />
                        Favorite beverage: <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </div>
            </Container>
            </>
        )
    }
}
    export default Footer;

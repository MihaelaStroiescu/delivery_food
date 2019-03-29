import React from 'react';
import { logo, miha, dan } from './../images/index.js';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../footer.css';
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
                    <h4 className="footer_title">Order from menu</h4>
                    {this.state.category.map(categ =>
                        <Col sm={4} xs={10} className="footer_categ" key={categ.id}>
                            <Link to={"/ordermenu/" + categ.id}>
                                <span className="footer_name_categ" key={categ.name}>{categ.name}</span>
                            </Link>
                        </Col>
                    )}
                </Col>
                <Col md={2} xs={6} className="footer_contact">
                    <h4 className="footer_title_phone"><a href="tel:040745099210">Call: 0745 099 210</a></h4>
                    <img className="footer_contact_img" src={miha} alt="Miha" />
                </Col>
                <Col md={2} xs={6} className="footer_contact">
                    <h4 className="footer_title_phone"><a href="tel:040771149606">Call: 0771 149 606</a></h4>
                    <img className="footer_contact_img" src={dan} alt="Dan" />
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <p className="footer_pargraph_follow">You can follow us on:</p>
                </Col>
                <Col md={4}>
                    <FontAwesomeIcon className="google_icon" icon={['fab', 'google']} size="2x" />
                </Col>
                <Col md={4}>
                    <FontAwesomeIcon className="facebook_icon" icon={['fab', 'facebook']} size="2x" />
                </Col>
            </Row>

            </Container>
            </>
        )
    }
}
    export default Footer;

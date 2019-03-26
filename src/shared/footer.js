import React from 'react';
// import UserContext from '../../shared/user.context';
import { logo, miha, dan, about_us } from './../images/index.js';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            <Row>
                <Col xs={2} className="footer_order">
                    <h3>Your Menu</h3>
                    <img src={logo} className="App-logo" alt="menu" />
                </Col>
                <Col xs={10} className="footer_order">
                    {/* <img src={about_us} className="footer_about_us" alt="Contact" /> */}
                    <h4 className="footer_title">Order</h4>

                    {this.state.category.map(categ =>
                        <Col sm={4} className="footer_categ">
                            <Link to={"/ordermenu/" + categ.id}>
                                <span className="footer_name_categ">{categ.name}</span>
                                {/* <Image src={"images/" + categ.images} alt="" name={categ.name} title={categ.name} fluid /> */}
                            </Link>
                        </Col>
                    )}
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <h4 className="footer_title_contact">Contact us</h4>
                    <h5>Call: 0745 099 210</h5>
                    <img className="footer_contact" src={miha} alt="Miha" />
                </Col>
                <Col xs={6}>
                    <h5>Call: 0745 099 210</h5>
                    <img className="footer_contact_img" src={dan} alt="Dan" />
                </Col>
            </Row>
            </Container>
            </>
        )
    }
}
    export default Footer;

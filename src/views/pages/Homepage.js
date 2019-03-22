import React  from 'react';

import UserContext from '../../shared/user.context';
import { logo, bottle, phone, trophy, about_us } from '../../images/index.js';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../App.css';
import '../../Homepage.css';



class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcome: "Welcome To our Food App Menu",
            posts: []
        };
    }
    render() {
        return (
            <>
            <UserContext.Consumer>
                { ({user}) => (
                    <>
            <div className="wrapper_homepage">
                <section className="homepage_intro">
                <div className="homepage_user">
                    <p>Welcome, {user.name}</p>
                </div>
                </section>
                <Container className="homepage_middle">
                <div className="homepage_middle_header">
                <h2>Why order with Delivery Food</h2>
                <div className="homepage_divider"></div>
                </div>
                <Row>
                    <Col xs={12} md={4}>
                        <Image className="homepage_middle_img" src={bottle} alt="Bottle"/>
                        <div className="bubbles">
                            <span className="bubbles-bubbles" ></span>
                            <span className="bubbles-bubbles" ></span>
                            <span className="bubbles-bubbles" ></span>
                            <span className="bubbles-bubbles" ></span>
                            <span className="bubbles-bubbles" ></span>
                            <span className="bubbles-bubbles"></span>
                            <span className="bubbles-bubbles"></span>
                            <span className="bubbles-bubbles"></span>
                        </div>
                        <div>
                        <h3>Find Favorites and Discover New Ones</h3>
                        <p>Browse thousands of restaurants and stores to get the best of your neighborhood delivered.</p>
                        </div>

                    </Col>
                        <Col xs={12} md={4}>
                            <Image className="homepage_middle_img" src={phone} alt="Phone" /><div className="bubbles">
                                <span className="bubbles-bubbles" ></span>
                                <span className="bubbles-bubbles" ></span>
                                <span className="bubbles-bubbles" ></span>
                                <span className="bubbles-bubbles" ></span>
                                <span className="bubbles-bubbles" ></span>
                                <span className="bubbles-bubbles"></span>
                                <span className="bubbles-bubbles"></span>
                                <span className="bubbles-bubbles"></span>
                            </div>
                        <h3>Free, Easy, and Essential</h3>
                        <p>It's free to order, so save time tackling your to-do list at home, at work, or on the go.</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <Image className="homepage_middle_img" src={trophy} alt="Trophy" />
                        <h3>Earn Points and Get Rewards</h3>
                        <p>It's free to order, so save time tackling your to-do list at home, at work, or on the go.</p>
                    </Col>
                </Row>
                <div className="homepage_about_us">
                    <div className="homepage_middle_header">
                    <h2>Get to know us</h2>
                    <div className="homepage_divider"></div>
                    </div>
                    <Row>
                        <Col xs={12} md={6}>
                        <Image className="homepage_about_us_img" src={about_us} alt="About Us" />
                        </Col>
                        <Col xs={12} md={6}>
                            <h3>About Us</h3>
                            <p className="hompage_paragraph">Your Menu is a technology company that connects people with the best in their cities. We do this by empowering local businesses and in turn, generate new ways for people to earn, work and live. We started by facilitating door-to-door delivery, but we see this as just the beginning of connecting people with possibility — easier evenings, happier days, bigger savings accounts, wider nets and stronger communities.</p>
                        </Col>
                    </Row>
                </div>
                </Container>
            </div>
            </>
            )}
            </UserContext.Consumer>
            </>
        );
    }
}


export default HomePage;

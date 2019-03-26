import React  from 'react';
import UserContext from '../../shared/user.context';
import Footer from '../../shared/footer';
import { logo, bottle, phone, trophy, about_us1 } from '../../images/index.js';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
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
                {/* <div className="homepage_middle_header"> */}
                {/* </div> */}
                <Row>
                    <Col>
                    <h2>Get to know us</h2>
                    <div className="homepage_divider"></div>
                    <p className="hompage_paragraph">Your Menu is a technology company that connects people with the best in their cities. We do this by empowering local businesses and in turn, generate new ways for people to earn, work and live. We started by facilitating door-to-door delivery, but we see this as just the beginning of connecting people with possibility — easier evenings, happier days, bigger savings accounts, wider nets and stronger communities.</p>
                    <Image className="homepage_about_us_img" src={about_us1} alt="About Us" />
                    </Col>
                </Row>
                </div>
                <Row className="homepage_localization">
                    <Col xs={12} md={6}>
                    <h3 className="homepage_title">Discover, order, and track in the app.</h3>
                    <p className="hompage_paragraph">We are a start-up on-demand network in the industry and  you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. </p>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="homepage_google_map">
                        <Map google={this.props.google} initialCenter={{
                                        lat: 45.6525767,
                                        lng: 25.5264224
                                    }} zoom={10}>
                        <Marker onClick={this.onMarkerClick} name={'Current location'} />
                            <InfoWindow onClose={this.onInfoWindowClose}>
                            </InfoWindow>
                        </Map>
                        </div>
                    </Col>
                </Row>
                </Container>
            </div>
            </>
            )}
            </UserContext.Consumer>
            </>

        );
    }
}



export default GoogleApiWrapper({
    apiKey: "AIzaSyA8IRQEYZiMYyOsk5SNapLmyprA5g_Ol1Y"
})(HomePage)

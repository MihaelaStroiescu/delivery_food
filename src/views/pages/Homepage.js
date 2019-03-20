import React  from 'react';

import UserContext from '../../shared/user.context';
import { logo, bottle, phone, trophy } from '../../images/index.js';
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
                <h2>Why order with Delivery Food</h2>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image className="homepage_middle_img" src={bottle} alt="Bottle"/>
                            <h3>Find Favorites and Discover New Ones</h3>
                            <p>Browse thousands of restaurants and stores to get the best of your neighborhood delivered.</p>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image className="homepage_middle_img" src={phone} alt="Phone" />
                            <h3>Free, Easy, and Essential</h3>
                            <p>It's free to order, so save time tackling your to-do list at home, at work, or on the go.</p>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image className="homepage_middle_img" src={trophy} alt="Trophy" />
                            <h3>Earn Points and Get Rewards</h3>
                            <p>It's free to order, so save time tackling your to-do list at home, at work, or on the go.</p>
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


export default HomePage;

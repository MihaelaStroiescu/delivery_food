import React from 'react';
import UserContext from '../../shared/user.context';
import { logo } from '../../images/index.js';
import '../../App.css';
import '../../Order.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardDeck} from 'react-bootstrap';


class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
        };
        this.apiUrl = "http://localhost:3004/menu";

    }

    async componentDidMount() {
        const resp = await axios.get(this.apiUrl);

        this.setState({category: resp.data});
       console.log(resp.data);
    }

    render() {

        return (
            <>
                <UserContext.Consumer>
                    {({ user }) => (
                        <>
                        <Container fluid className="logo_container">
                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="menu" />
                            </header>
                            <h3>Welcome, {user.name}</h3>
                                <p className="order_paragraph">Hungry for Indian? Satisfy any craving with a few quick clicks and enjoy the wonderful world of delivery. Whether you’re at home, at work, or on the go, Your Menu lets you connect with your favorite local restaurants and easily discover new ones.</p>
                        </Container>
                        <Container fluid className="categ_container">

                            <Row>
                                 {this.state.category.map(categ =>
                                    <Col xl={3} md={6} xs={12} className="categ" key={categ}>
                                     <CardDeck className="card_deck">
                                             <Link to={"/ordermenu/" + categ.id}>
                                                 <Card className="card">
                                                     <Card.Img variant="top" src={"images/" + categ.images} />
                                                     <Card.Body>
                                                         <Card.Title>{categ.name}</Card.Title>
                                                         <Card.Text>
                                                         </Card.Text>
                                                     </Card.Body>
                                                     <Card.Footer>
                                                            <p>Order Now!</p>
                                                     </Card.Footer>
                                                 </Card>
                                             </Link>
                                         </CardDeck>
                                     </Col>
                                )}
                            </Row>

                        </Container>
                    </>
                    )}
                </UserContext.Consumer>
           </>
        );
    }}
export default Order;

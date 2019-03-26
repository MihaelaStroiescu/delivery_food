import React from 'react';
import UserContext from '../../shared/user.context';
import { logo } from '../../images/index.js';
import '../../App.css';
import '../../Order.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image} from 'react-bootstrap';

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
                        <Container>
                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="menu" />
                            </header>
                            <p>Welcome, {user.name}</p>
                        </Container>
                        <Container>
                            <Row>
                                 {this.state.category.map(categ =>
                                    <Col sm={4} className="categ">
                                        <Link to={"/ordermenu/" + categ.id}>
                                                <span className="name_categ">{categ.name}</span>
                                            <Image src={"images/" + categ.images} alt="" name={categ.name} title={categ.name} fluid/>
                                        </Link>
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

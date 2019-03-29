import React from 'react';
import axios from 'axios';
import UserContext from '../../shared/user.context';
import { logo, start_homepage_two } from '../../images/index';
import '../../App.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Figure} from 'react-bootstrap';
import '../../OrderMenu.css';

class OrderMenu extends React.Component {
    constructor(props) {
        super(props);
        this.apiUrl = `http://localhost:3004/menu/${this.props.match.params.id}`;
        this.state = {
            menu: {},
            menu_items: [],
            sub_items: []
        };

    }
    async componentDidMount() {
        const menu = (await axios.get(this.apiUrl)).data;
        this.setState({menu, menu_items: menu['menu-items']});
        this.setState({sub_items: menu['menu-items'][0]['sub-items']})
        console.log(menu['menu-items']);
    }

    render() {
        return (
            <>
            <section className="ordermenu_intro">
            <Row>
            <Col md={4} sm={6}>
                <h2 className="ordermenu_title">{this.state.menu.name} </h2>
            </Col>
            </Row>
            </section>
                <Container className="ordermenu_wrapper">
                    <ul>
                        {this.state.menu_items.map(menu =>
                            <li key={menu.name} className="ordermenu_list">
                                <Row>
                                    <Col md={4} sm={10}>
                                        <Figure>
                                            <Figure.Image className="ordermenu_img"
                                                src={"../images/" + menu.images} alt="171x180" title={menu.name} />
                                            <Figure.Caption>
                                                <p>{menu['sub-items'][0].name}</p>
                                            </Figure.Caption>
                                        </Figure>
                                    </Col>
                                    <Col md={2} sm={2}>
                                        <p className="ordermenu_price">{menu['sub-items'][0].cuisine_name}</p>
                                    </Col>
                                    <Col md={4} sm={12}>
                                        <p className="ordermenu_price">{menu['sub-items'][0].price + "$"}</p>
                                    </Col>
                                </Row>
                            </li>
                        )}
                    </ul>
                </Container>

            </>
        );
    }
}

export default OrderMenu;

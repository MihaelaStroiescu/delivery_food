import React from 'react';
import UserContext from '../../shared/user.context';
import { logo, appeteasers, fino_side, peri_peri_chicken, sharing_platters, dessert, sides, cataplana_algarve, salads, burgers_pitas_wraps } from '../../images/index.js';
import '../../App.css';
import axios from 'axios';
//import { Link } from 'react-router-dom';

class Order extends React.Component {
    constructor(props) {
        super(props);

        this.apiUrl = "http://localhost:3004/category";
        this.state = {
            category: []
        };

        this.matchCategory = this.matchCategory.bind(this);

        console.log('this', this);
    }
/*
async componentDidMount() {
    const resp = await
                    axios.get(this.apiUrl);
    this.setState({ category: resp.data });
    console.log(resp.data);
    console.log(this.state.category);

}

    matchCategory(e) {
        const details = this.state.category;
        const value = e.currentTarget.value;
        details[e.currentTarget.name] = value;
    }
*/


    async componentDidMount() {
        const detail = (
            await axios
                .get(this.apiUrl))
            .data;
        this.setState({ detail });

        console.log('detail',detail);

    }

    matchCategory(e) {
        const value = e.currentTarget.value;
        const detail = this.state.detail;
        detail[e.currentTarget.id] = value;
        this.setState({ detail });
    }

    render() {

        return (
            <>
                <UserContext.Consumer>
                    {({ user }) => (
                        <>
                        <div>
                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="menu" />
                            </header>
                            <h1>Delivery Menu Food</h1>
                            <p>Welcome, {user.name}</p>
                            {/* {this.state.category.map(dan => (
                                <li key={dan.name}>{dan.name}</li>
                             ))} */}

                        </div>

                <div className="wrapper_main">
                    <section className="deliver_intro">
                    <h2>Your neighborhood. Delivered.</h2>
                    <p>Hungry for sushi? How ‘bout Italian? Satisfy any craving with a few quick clicks and enjoy the wonderful world of delivery. Whether you’re at home, at work, or on the go, delivery.com lets you connect with your favorite local restaurants and easily discover new ones.</p>
                    </section>
                    <section className="wrapper_homepage">
                    <h3>Popular Cuisines</h3>

                    <div className="container_homepage">
                        <div className="row menu">
                            <div className="col-sm menu_options">
                            <img src={appeteasers} alt="Appeteasers" /*value={this.state.category.name} onClick={this.matchCategory} */ />
                                                <input id="title" value={this.state.category.name} onChange={this.matchCategory} />

                            <img src={fino_side} alt="Fino side" />
                            <span className="seoImageTile__title">Fino side</span>
                            <img src={peri_peri_chicken} alt="Peri peri chicken" />
                            </div>
                            <div className="col-sm menu_options">
                                <img src={sharing_platters} alt="Sharing platters" />
                                <img src={dessert} alt="Dessert" />
                                <img src={sides} alt="Sides" />
                            </div>
                            <div className="col-sm menu_options">
                                <img src={cataplana_algarve} alt="Cataplana algrave" />
                                <img src={salads} alt="salads" />
                                <img src={burgers_pitas_wraps} alt="Burgers, pitas, wraps" />
                            </div>
                         </div>
                    </div>
                    </section>
                </div>
            </>
            )}
            </UserContext.Consumer>
            </>
        );
    }
}
export default Order;

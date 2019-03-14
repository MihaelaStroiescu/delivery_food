import React  from 'react';

import UserContext from '../../shared/user.context';
import { logo, appeteasers, fino_side, peri_peri_chicken, sharing_platters, dessert, sides, cataplana_algarve, salads, burgers_pitas_wraps } from '../../images/index.js';
import '../../App.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';


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
                    <div>
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="menu" />
                        </header>
                        <p>Welcome, {user.name}</p>
                    </div>
                )}

            </UserContext.Consumer>
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
                                <img src={appeteasers} alt="Appeteasers"/>
                                <span className="seoImageTile__title">Appeteasers</span>
                                <img src={fino_side} alt="Fino side"/>
                                    <span className="seoImageTile__title">Fino side</span>
                                <img src={peri_peri_chicken} alt="Peri peri chicken"/>
                            </div>
                            <div className="col-sm menu_options">
                                <img src={sharing_platters} alt="Sharing platters" />
                                <img src={dessert} alt="Dessert" />
                                <img src={sides} alt="Sides"/>
                            </div>
                            <div className="col-sm menu_options">
                                <img src={cataplana_algarve} alt="Cataplana algrave" />
                                <img src={salads} alt="salads" />
                                <img src={burgers_pitas_wraps} alt="Burgers, pitas, wraps"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </>
        );
    }
}
export default HomePage;

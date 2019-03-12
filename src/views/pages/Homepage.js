import React  from 'react';
import menu from '../../menu_logo.png';
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
            <div>
                <header className="App-header">                    
                    <img src={menu} className="App-logo" alt="menu" />
                </header>
                <h1>Delivery Menu Food App</h1>
                <p>{this.state.welcome}</p>
            </div>         
          
        );
    }
}

export default HomePage;


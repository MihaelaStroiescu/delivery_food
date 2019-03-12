import React  from 'react';
import logo from '../../logo.svg';
import '../../App.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ceva: "ceva banal",
            posts: []
        };
    }
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <h1>Delivery Menu Food App</h1>
                <p>{this.state.ceva}</p>
            </div>         
          
        );
    }
}

export default HomePage;


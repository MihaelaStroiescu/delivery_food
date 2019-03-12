import React  from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


class HomePage extends React.Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <h1>Delivery Menu Food App</h1>
            </div>
        );
    }
}

export default HomePage;


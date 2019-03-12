import React  from 'react';
import logo from '../../menu_logo.png';
import UserContext from '../../shared/user.context'
// import '../../App.css';
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
            <UserContext.Consumer>
                { ({user}) => (
                    <div>
                        <header className="App-header">                    
                            <img src={logo} className="App-logo" alt="menu" />
                        </header>
                        <h1>Delivery Menu Food App</h1>
                        <p>Welcome, {user.name}</p>
                    </div>
                )}
                 
            </UserContext.Consumer>  
          
        );
    }
}

export default HomePage;


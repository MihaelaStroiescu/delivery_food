import React from 'react';
import axios from 'axios';
import UserContext from '../../shared/user.context';
import { logo } from '../../images/index';
import '../../App.css';
import { Link } from 'react-router-dom';

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
        this.setState({menu});   
        this.setState({menu_items: menu['menu-items']})
        // this.setState({sub_items: menu['menu-items']['sub-items']})        
        console.log(menu['menu-items']);       
    }
   
    render() {
        return (
            <>
            <div>
               <h2> Category Name {this.state.menu.name} </h2>
               <ul>{this.state.menu_items.map(menu =>
                    <li>{menu.name}</li>
                )}</ul>
            </div>
            </>
        );
    }
}

export default OrderMenu;
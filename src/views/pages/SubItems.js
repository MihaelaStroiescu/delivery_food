import React from 'react';

//import { logo, appeteasers, fino_side, peri_peri_chicken, sharing_platters, dessert, sides, cataplana_algarve, salads, burgers_pitas_wraps } from '../../images/index.js';
import '../../App.css';
import MainMenu from './shared/mainMenu';
import { logo } from '../images/index.js';
//import axios from 'axios';
class SubItems extends React.Component {
    constructor(props) {
        super(props);
        this.apiUrl = 'https://raw.githubusercontent.com/MihaelaStroiescu/delivery_food/bia/db.json';
        this.state = {
           item: {},
            description: []
            images[]
        }
    }

    componentDidMount() {
        this.fetchSubItems();
        this.fetchDescription();
    }
   


    async fetchSubItems() {

        const url = this.apiUrl + 'menu-items/';
        const resp = await axios.get(url + this.props.match.params.id);
        this.setState({ item: resp.data });
    }
    async fetchDescription() {
        const url = this.apiUrl + 'description?postId=';
        const resp = await axios.get(url + this.props.match.params.id);
        this.setState({ description: resp.data });
    }


const selectRowProp = {
  mode: 'radio'
};

  class SingleSelectTable extends React.Component {
    render() {
      return (

        <BootstrapTable data={ products }>
            <TableHeaderColumn dataField='name'>Menu</TableHeaderColumn>
            <TableHeaderColumn dataField='description'>description</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Menu Price</TableHeaderColumn>
        </BootstrapTable>
      
      );
    }
  }
export default SingleSelectTable;
export default SubItems;
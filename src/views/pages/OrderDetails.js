import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class OrderDetails extends React.Component {
    constructor(props) {
        super(props);

        this.apiUrl = "http://localhost:3004/menu";
        this.state = {
            category: [],
            product: []
        };

        this.inputChanged = this.inputChanged.bind(this);
    }
    async componentDidMount() {
        const detail = (
            await axios
                .get(this.apiUrl))
            .data;
        this.setState({ detail });
        console.log(detail);

    }


    render() {
        return (
            <>
                <h2>Order detail:{this.state.props.category.name}</h2>
                {this.state.category.map(dan => (
                    <p key={dan.name}>
                        <Link to={"/OrderDetails/" + dan.name} >{dan.name}</Link>
                    </p>

                ))}

            </>
        )
    }

}
export default OrderDetails;

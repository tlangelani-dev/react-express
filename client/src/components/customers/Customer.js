import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        };
    }
    componentDidMount() {
        fetch('/api/customers').then(res => res.json()).then(customers => {
            console.log(customers);
            this.setState({customers});
        });
    }
    render() {
        return (
            <div>
                <h2>Customers</h2>
                <ul>
                    {this.state.customers.map(customer => 
                    <li key={ customer.id }>{ customer.fname } { customer.lname }</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Customers;

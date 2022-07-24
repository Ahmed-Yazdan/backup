import React, { Component } from 'react';
import User from './User';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            cart: []
        }
        this.handleAddFriend = this.handleAddFriend.bind(this);
    }

    handleAddFriend(user){
        const newCart = [...this.state.cart, user]
        this.setState({cart: newCart})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => this.setState({ users: data }))
    }
    render() {
        return (
            <div>
                <h1>This  is users: {this.state.users.length}</h1>
                <h3>Cart: {this.state.cart.length}</h3>
                {
                    this.state.users.map(user => <User handleAddFriend={this.handleAddFriend} user={user} key={user.id} />)
                }
            </div>
        );
    }
}

export default Users;
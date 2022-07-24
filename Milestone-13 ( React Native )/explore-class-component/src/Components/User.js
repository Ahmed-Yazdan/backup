import React, { Component } from 'react';

export default class User extends Component {
    render() {
        return (
            <div>
                <h1>Name: {this.props.user.name}</h1>
                <h3>Name: {this.props.user.email}</h3>
                <button onClick={e => this.props.handleAddFriend(this.props.user)}>Add friend</button>
            </div>
        );
    }
}
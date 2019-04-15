import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import store, { UPDATE_USERNAME } from '../store'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: store.getState().username
        }
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                username: store.getState().username
            })
        })
    }

    handleUsernameChange(e) {
        let action = {
            payload: e.target.value,
            type: UPDATE_USERNAME
        }
        store.dispatch(action)
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input placeholder='Username' onChange={this.handleUsernameChange} />
                <input placeholder='Password' onChange={this.handlePasswordChange} />
                <Link to='/profile'>Log in</Link>
            </div>
        )
    }
}
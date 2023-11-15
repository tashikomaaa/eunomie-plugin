import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h2>Login</h2>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" name="username" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" required />
                            </div>
                            <button type="submit">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

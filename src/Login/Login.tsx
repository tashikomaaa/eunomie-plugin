import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="Login">
        
            <div className="input-container">
              <input type="text" placeholder="Username"/>
              <i className="zmdi zmdi-account zmdi-hc-lg"></i>
            </div>
            
            <div className="input-container">
              <input type="password" placeholder="Password"/>
              <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
            </div>
            
            <button type="submit">Log In</button>
          </div>
        )
    }
}

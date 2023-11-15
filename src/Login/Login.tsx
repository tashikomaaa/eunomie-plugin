import React, { Component } from 'react'


export default class Login extends Component<{}, {email: string, password: string}> {
    constructor(props: any) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    async login() {
        await fetch('http://172.232.54.227:3000/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
        fetch('',)
    }
    render() {
        return (
            <div className="Login">

                <div className="input-container">
                    <input type="text" value={this.state.email}  onChange={(e) => this.setState({email: e.target.value})} placeholder="email" />
                    <i className="zmdi zmdi-account zmdi-hc-lg"></i>
                </div>

                <div className="input-container">
                    <input type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}placeholder="mot de pasee" />
                    <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
                </div>

                <button type="submit" onClick={async () => await this.login()}>Connection</button>
            </div>
        )
    }
}

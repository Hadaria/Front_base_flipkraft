import React, { Component } from 'react'
import axios from 'axios'

class SigninGet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    componentDidMount() {
        axios.get("http://test.flipkraft.ovh/api/me")
            .then(response => {
                console.log("API response:", response)
            })
            .catch(error => {
                console.log("HTTP Error:", error)
            })
    }

    render() {
        const { username, password } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button type="submit">Connexion</button>
                </form>
            </div>
        )
    }
}
export default SigninGet
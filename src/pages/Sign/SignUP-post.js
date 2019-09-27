import React, {Component} from 'react'
import axios from 'axios'

class SignUPPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            usernameOk: false,
            email: '',
            phone_number: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        if (e.target.value !== "")
            this.setState({
                [e.target.name]: e.target.value,
                usernameOk: true
            })
        else
            this.setState({
                [e.target.name]: e.target.value,
                usernameOk: false
            })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post("http://test.flipkraft.ovh/api/user", this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log("ErrorHTTP:", error)
            })
    }

    render() {
        const {username, email, phone_number, password} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input type="email"
                               name="email"
                               value={email}
                               onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            name="phone_number"
                            value={phone_number}
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
                    {this.state.usernameOk ? <button type="submit">Inscription</button> : null}
                </form>
            </div>
        )
    }
}

export default SignUPPost
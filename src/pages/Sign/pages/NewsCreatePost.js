import React, {Component} from 'react'
import axios from 'axios'

class NewsCreatePost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            titleOk: '',
            message: '',
            description: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler = (e) => {
        if (e.target.value !== "")
            this.setState({
                [e.target.name]: e.target.value,
                titleOk: true
            })
        else
            this.setState({
                [e.target.name]: e.target.value,
                titleOk: false
            })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post("http://test.flipkraft.ovh/api/news/create", this.state, {
            auth: {
                username: "holy_admin",
                password: "G4NGdaeD"
            }
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
        console.log("Error HTTP:", error)
            })
    }

    render() {
        const {title, message, description} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input type="text"
                               name="message"
                               value={this.state.message}
                               onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="description"
                            value={this.state.description}
                            onChange={this.changeHandler}
                        />
                    </div>
                    {this.state.titleOk ? <button type="submit">Poster un commentaire</button> : null}
                </form>
              </div>
        )
    }
}

export default NewsCreatePost
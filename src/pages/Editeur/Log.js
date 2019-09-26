import React from "react"
import Nav from "./Nav"
import LogupForm from "./LogupForm";
import LoginForm from "./LoginForm";

class Log extends React.Component {
    user;
    constructor(props) {
        super(props);
        this.state = {
            displayed_form: '',
            logged_in: localStorage.getItem('token') ? true : false,
            username:''
        };
    }

    componentDidMount() {
        if (this.state.logged_in) {
            fetch('http://test.flipkraft.ovh/api/me',{
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(json => {
                    this.setState({username: json.username});
                });
        }
    }
    handle_login = (e, data) =>  {
        e.preventDefault();
        console.log(data)
        fetch('http://test.flipkraft.ovh/api/me', {
            method:'POST',
            headers:{
                    Authorization: `JWT ${localStorage.getItem('token')}`

            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('token', json.token);
                this.setState({
                    logged_in: true,
                    displayed_form: '',
                    username: json.username
                });
            });
    };

    handle_signup = (e, data) => {
        e.preventDefault();
        fetch("http://test.flipkraft.ovh/api/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('token', json.token);
                this.setState({
                    logged_in:true,
                    displayed_form:'',
                    username: json.username
                });
            });
    };

    handle_logout = () => {
        localStorage.removeItem('token');
        this.setState({logged_in: false, username: ''});
    };

    display_form = form => {
        this.setState({
            displaued_form: form
        });
    };

    render() {
        let form;
        switch (this.state.displaued_form) {
            case 'login':
                form = <LoginForm handle_login={this.handle_login}/>
                break;
            case 'signup':
                form = <LogupForm handle_signup={this.handle_signup}/>
                break;
            default:
                form = null;
        }
        return (
            <div className="App">
                <Nav
                    logged_in={this.state.logged_in}
                    display_form={this.display_form}
                    handle_logout={this.handle_logout}
                />
                {form}
                <h3>
                    {this.state.logged_in ? `Hello, ${this.state.username}` : 'Connectez-vous svp'}
                </h3>
            </div>
        );
    }
}
export default Log
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            phone_number: '',
            password: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({[e.target.name]: e.target.value})

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
        const { username, email, phone_number, password } = this.state
        return (
        <div className="FormCenter">
            <form onSubmit={this.submitHandler} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="username">Identifiant</label>
                <input type="text"
                       id="username"
                       className="FormField__Input"
                       placeholder="Entrer votre pseudo"
                       name="username"
                       value={username}
                       onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Mot de Passe</label>
                <input type="password"
                       id="password"
                       className="FormField__Input"
                       placeholder="Entrer votre mot de passe"
                       name="password"
                       value={password}
                       onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Addresse E-mail</label>
                <input type="email"
                       id="email"
                       className="FormField__Input"
                       placeholder="Entrer votre e-mail"
                       name="email"
                       value={email}
                       onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="number">Numéro de téléphone</label>
                <input type="number"
                       id="number"
                       className="FormField__Input"
                       placeholder="Entrer votre numéro de téléphone"
                       name="phone_number"
                       value={phone_number}
                       onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">S'inscrire</button> <Link to="/sign-in" className="FormField__Link">Je suis déjà membre</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;

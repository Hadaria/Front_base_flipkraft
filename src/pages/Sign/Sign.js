import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';


import './Sign.css';
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";


class Sign extends Component {
  render() {
    return (
        <div>
            <NavBar />
<Router basename="flipkraft-auth">
        <div className="Sign">
          <div className="Sign__Aside"></div>
          <div className="Sign__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Se connecter</NavLink>
                <NavLink exact to="/sign" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">S'inscrire</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Se connecter</NavLink> ou <NavLink exact to="/sign" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">S'inscrire</NavLink>
              </div>

              <Route exact path="/sign" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>

        </div>
      </Router>
            <Footer />
        </div>

    );
  }
}

export default Sign;

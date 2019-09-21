import React, { Component } from 'react';

//Import Component
import NavBar from "../components/NavBar";

import Contact from "../components/Contact";
import Footer from "../components/Footer";

class HomeTwo extends Component {
  render() {
    return (
        <React.Fragment>
            {/* NavBar: src/components/NavBar.jsx */}
            <NavBar pageName="home" />

            {/* Contact: src/components/Contact.jsx */}
            <Contact />
            {/* Footer: src/components/Footer.jsx */}
            <Footer />
        </React.Fragment>
    );
  }
}

export default HomeTwo;

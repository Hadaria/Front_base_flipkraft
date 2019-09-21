import React, { Component } from 'react';

//Import Component
import NavBar from "../components/NavBar";
import BannerOne from "../components/banner/BannerOne";
import Services from "../components/Services";
import About from "../components/About";
import Team from "../components/Team";
import Blog from "../components/Blog";
import VideoArea from "../components/VideoArea";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class HomeOne extends Component {
  render() {
    return (
        <React.Fragment>
            {/* NavBar: src/components/NavBar.jsx */}
            <NavBar pageName="home" />
            {/* BannerOne: src/components/banner/BannerOne */}
            <BannerOne />
            {/* Services: src/components/Services.jsx */}
            <Services />
            {/* Works: src/components/Works.jsx */}
            <About />
            {/* Team: src/components/Team.jsx */}
            <Team />
            {/* Blog: src/components/Blog.jsx */}
            <Blog />
            {/* VideoArea: src/components/VideoArea.jsx */}
            <VideoArea />
            {/* Contact: src/components/Contact.jsx */}
            <Contact />
            {/* Footer: src/components/Footer.jsx */}
            <Footer />
        </React.Fragment>
    );
  }
}

export default HomeOne;

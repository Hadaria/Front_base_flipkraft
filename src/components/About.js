import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends Component {
    render() {
        //About loop start
        const aboutdata = this.props.aboutsData.map((about, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
                <div className="about-info">
                    <Icofont icon={about.Icon} />
                    <h3>{about.title}</h3>
                    <p>{about.content}</p>
                </div>
            </div>
        ));
        //About loop END
        return (
            <React.Fragment>
                <section id="about" className="about-us ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="section-title">
                                    <h2>{this.props.sectionTitle}</h2>
                                    <p>{this.props.sectionDescription}</p>
                                    <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    
                    <div className="row">
                        {aboutdata}
                    </div>
                </div>
            </section>   
            </React.Fragment>
        );
    }
}
//Props Types
About.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    aboutsData: PropTypes.array
};

//Default Props
About.defaultProps = {
    SectionbgTitle: "About",
    sectionTitle: "Nos Vecteur",
    sectionDescription:
        "Voici les principales idées motrices derrière le projet Flipkraft et qui animent chaque membres de l'équipe !",
        aboutsData: [
        {
            Icon: "icofont-unique-idea",
            title: "La créativité",
            content: "Notre volonté est de permettre à tout le monde de créer leur propre jeu, avec des outils simples à prendre en main et sans limites !",
        },
        {
            Icon: "icofont-users-social",
            title: "L'interactivité",
            content: "Notre volontée est d'être toujours à l'écoute de nos utilisateurs, afin de pouvoir vous proposer le meilleur système possible",
        },
        {
            Icon: "icofont-flag-alt-2",
            title: "Le challenge",
            content: "Les jeux de cartes ont toujours été un vecteur de défi, de challenge. Nous voulons continuer a véhiculer ces idées et permettre à tout le monde de s'épanouir par le jeu",
        },
    ]
};

export default About;

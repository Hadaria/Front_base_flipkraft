import React, { Component } from 'react';
import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import ScrollAnimation from 'react-animate-on-scroll';

class Services extends Component {
  render() {
      //Service loop start
      const servicedata = this.props.servicesData.map((service, index) => (
        <div className="col-md-6 col-lg-4 text-center" key={index}>
            <div className="service-item">
                <div className="glyph">
                    <Icofont icon={service.icon} />
                </div>
                <h3>{service.heading}</h3>
                <p>{service.description}</p>
            </div>
        </div>
    ));
    //Service loop END
    return (
        <React.Fragment>
            <section id="services" className="services ptb-100">
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
                        {servicedata}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}

//Props Types
Services.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    servicesData: PropTypes.array
};

//Default Props
Services.defaultProps = {
    SectionbgTitle: "Services",
    sectionTitle: "Services",
    sectionDescription:
        "Voici les différentes fonctionnalités que Flipkraft vous propose : ",

    servicesData: [
        {
            icon: "icofont-automation",
            heading: "Un système facile à prendre en main",
            description:
                "Notre programme vous permettra de faire vos premières parties très rapidement, le tout de manière extrêmement simple, peu importe l'endroit ou vous vous trouvez !"
        },
        {
            icon: "icofont-beaker",
            heading: "Un éditeur pour expérimenter vos idées de jeu",
            description:
                "Avec notre éditeur, vous pouvez littéralement créer le jeu qui vous ressemble ! Le tout de facon simple et ergonomique, en pouvant par la suite le partager !"
        },
        {
            icon: "icofont-chat",
            heading: "Une équipe présente et à l'écoute",
            description:
                "Avec les news, vous êtes constamment informés des mise à jour de Flipkraft, et vous pouvez contacter l'équipe à tout moment via le formulaire mis à votre disposition"
        },
    ]
};

export default Services;

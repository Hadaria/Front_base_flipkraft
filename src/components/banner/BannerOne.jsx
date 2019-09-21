import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel3";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import VisibilitySensor from "react-visibility-sensor";

class BannerOne extends Component {
    render() {
        //BannerOne loop start
        const banneronedata = this.props.banneronesData.map(
            (bannerone, index) => (
                <div className={bannerone.BgClass} key={index}>
                    <div className="diplay-table">
                        <div className="display-table-cell">
                            <VisibilitySensor>
                                {({ isVisible }) => (
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <span
                                                className={
                                                    isVisible
                                                        ? "hero-text animated fadeInDown slow opacityOne"
                                                        : "opacityZero"
                                                }
                                            >
                                                {bannerone.TopTitle}
                                            </span>

                                            <h1
                                                className={
                                                    isVisible
                                                        ? "animated fadeInDown slow opacityOne"
                                                        : "opacityZero"
                                                }
                                            >
                                                {bannerone.Title}
                                            </h1>
                                            <p
                                                className={
                                                    isVisible
                                                        ? "animated fadeInDown slow opacityOne"
                                                        : "opacityZero"
                                                }
                                            >
                                                {bannerone.Content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            </VisibilitySensor>
                        </div>
                    </div>
                </div>
            )
        );
        //BannerOne loop END
        
        //Thumbs loop Start
        const thumbdata = this.props.thumbsData.map((thumb, index) => (
            <div className="owl-thumb-item" key={index}>
                <Icofont icon={thumb.ThumbIcon} />
                <h3>{thumb.ThumbTitle}</h3>
                <p>{thumb.ThumbContent}</p>
            </div>
            )
        );
        //Thumbs loop END
        return (
            <React.Fragment>
                <div id="home" className="hompage-slides-wrapper">
                    <OwlCarousel
                        className="owl-theme homepage-slides"
                        items={1}
                        touchDrag={false}
                        margin={0}
                        mouseDrag={false}
                        smartSpeed={1000}
                        dotData={true}
                        dotsContainer={".owl-thumbs"}
                    >
                        {banneronedata}
                    </OwlCarousel>

                    <div className="owl-thumbs">
                        {thumbdata}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
//Props Types
BannerOne.propTypes = {
    banneronesData: PropTypes.array,
    thumbsData: PropTypes.array
};

//Default Props
BannerOne.defaultProps = {
    banneronesData: [
        {
            BgClass: "single-slider-item slide-bg-1",
            TopTitle: "",
            Title: "Jouez à ce que vous voulez !",
            Content:
                "Que vous soyez plutôt tarot ou belote, ou que vous préfériez les jeux à licence, on a ce qu'il vous faut.",
        },
        {
            BgClass: "single-slider-item slide-bg-2",
            TopTitle: "",
            Title: "Jouez avec qui vous voulez !",
            Content:
                "Jouez avec une ia pour vous entrainer et, si vous vous sentez prêt, affrontez d'autres joueurs",
        },
        {
            BgClass: "single-slider-item slide-bg-3",
            TopTitle: "",
            Title: "Et surtout... Créez ce que vous voulez !",
            Content:
                "Vous avez une idée de jeu ? Créez le grâce à notre éditeur qui vous donnera toutes les cartes en main",
        }
    ],
    thumbsData: [
        {
            ThumbIcon: "icofont-penalty-card",
            ThumbTitle: "Un tas de jeux",
            ThumbContent: "",
        },
        {
            ThumbIcon: "icofont-web",
            ThumbTitle: "Ne soyez pas seul",
            ThumbContent: "",
        },
        {
            ThumbIcon: "icofont-unique-idea",
            ThumbTitle: "Soyez créatifs",
            ThumbContent: "",
        },
    ]
};

export default BannerOne;

import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';

//Import Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

class BlogOne extends Component {
  render() {
    //BlogOne loop start
    const blogonedata = this.props.blogonesData.map((blogone, index) => (
        <div className="col-md-6 col-lg-6" key={index}>
            <div className="blog-item">
                <Link to={blogone.postLink} className="blog-img"><img src={blogone.postImage} alt="blog-one" /></Link>
                <div className="blog-info">
                    <div className="date-box">
                        {blogone.date} <span className="month">{blogone.month}</span>
                    </div>
                    <div className="title-meta">
                        <h2><Link to={blogone.postLink}>{blogone.posttitle}</Link></h2>
                        <div className="post-meta">
                            <ul>
                                <li><Icofont icon="icofont-funky-man" /> Posted By: <Link to={blogone.authorLink}>{blogone.authorName}</Link></li>
                                <li><Icofont icon="icofont-speech-comments" /> Comments: <Link to={blogone.CommentsLink}>{blogone.TotalComments}</Link></li>
                                <li><Icofont icon="icofont-tags" /> Tags: <Link to={blogone.TagLink}>{blogone.TagName}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    <p>{blogone.postContent}</p>
                </div>
            </div>
        </div>
    ));
    //BlogOne loop END
    return (
        <React.Fragment>

        {/*NavBar: src/components/NavBer.jsx */}
        <NavBar />

        <div className="bread-cumbs-area bread-cumbs-bg">
            <div className="diplay-table">
                <div className="display-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h1>{this.props.Title}</h1>
                                <p>{this.props.Content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  

        <section id="blog" className="our-blog main-blog">
            <div className="container">
                <div className="row">
                    {blogonedata}
                    <div className="col-lg-12 pagination-area text-center">
                        <ul className="pagination">
                            <li><Link to="/#0"><Icofont icon="icofont-simple-left" /> Prev</Link></li>
                            <li className="active"><Link to="/#0">1</Link></li>
                            <li><Link to="/#0">Next <Icofont icon="icofont-simple-right" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/*Footer: src/components/Footer.jsx */}
        <Footer />
        
        </React.Fragment>
    );
  }
}
//Props Types
BlogOne.propTypes = {
    Title: PropTypes.string,
    Content: PropTypes.string,
    blogonesData: PropTypes.array
};

//Default Props
BlogOne.defaultProps = {
    Title: "Bienvenue dans la section News de Flipkraft",
    Content: "Nous vous communiquerons les différentes évolutions du site ainsi que les informations importantes par le biais de cette section, n'hésitez pas à y revenir régulièrement !",
    blogonesData: [
        {
            postImage: require("../assets/img/blog-one.jpg"),
            postLink: "/blog-details",
            date: "22",
            month: "Sep",
            posttitle: "L'endroit de toute la communication de l'équipe",
            postContent: "Nous vous communiquerons les différentes évolutions du site ainsi que les informations importantes par le biais de cette section, n'hésitez pas à y revenir régulièrement !",
            authorName: "Thomas",
            authorLink: "#",
            TotalComments: "00",
            TagName: "Information",
            TagLink: "#",
        },
    ]
};

export default BlogOne;

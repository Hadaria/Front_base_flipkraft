import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

class Blog extends Component {
    componentDidMount() {
        let scrollWithOffset = (el, offset) => {
            const elementPosition = el.offsetTop - offset;
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth"
            });
        };
        this.setState({ scrollWithOffset });
    }
  render() {
    //Blog loop start
    const blogdata = this.props.blogsData.map((blog, index) => (
        <div className="col-md-6 col-lg-6" key={index}>
            <div className="blog-item">
                <Link to={blog.postLink} className="blog-img"><img src={blog.postImage} alt="blog-one" /></Link>
                <div className="blog-info">
                    <div className="date-box">
                        {blog.date} <span className="month">{blog.month}</span>
                    </div>
                    <div className="title-meta">
                        <h2><Link to={blog.postLink}>{blog.posttitle}</Link></h2>
                        <div className="post-meta">
                            <ul>
                                <li><Icofont icon="icofont-funky-man" /> Posted By: <Link to={blog.authorLink}>{blog.authorName}</Link></li>
                                <li><Icofont icon="icofont-speech-comments" /> Comments: <Link to={blog.CommentsLink}>{blog.TotalComments}</Link></li>
                                <li><Icofont icon="icofont-tags" /> Tags: <Link to={blog.TagLink}>{blog.TagName}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    <p>{blog.postContent}</p>
                </div>
            </div>
        </div>
    ));
    //Blog loop END
    return (
        <React.Fragment>
            <section id="blog" className="our-blog ptb-100">
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
                        {blogdata}
                        <div className="col-lg-12 col-md-12 all-post">
                            <div className="center-wrap">
                            <Link to={this.props.btnLink} className="btn-a">
                                <div className="button">
                                    {this.props.BlogBtn} <Icofont icon="icofont-long-arrow-right" />
                                    <div className="mask"></div>
                                </div>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </React.Fragment>
    );
  }
}
//Props Types
Blog.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    btnLink: PropTypes.string,
    BlogBtn: PropTypes.string,
    blogsData: PropTypes.array
};

//Default Props
Blog.defaultProps = {
    SectionbgTitle: "News",
    sectionTitle: "Les News",
    sectionDescription:
        "Bienvenue dans la section où se trouvent les toutes dernières informations concernant Flipkraft !",
    btnLink: "/blog-one",
    BlogBtn: "Voir toutes les news",
        blogsData:  [
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
                CommentsLink: "#",
                TagName: "Information",
                TagLink: "#",
            },
        ]
};

export default Blog;

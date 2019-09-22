import React, { Component } from "react";
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import axios from "axios";
import Blog from "./Blog";


/*

function getMe() {
    // We're using axios instead of Fetch
    axios
    // The API we're requesting data from
        .get("test.flipkraft.ovh/api/me")
        // Once we get a response, we'll map the API endpoints to our props
        .then(response =>
            response.data.results.map(user => ({
                username: `${user.username}`,
                date_joined: `${user.date_joined}`,
                last_login: `${user.last_login}`,
                image: `${user.picture.thumbnail}`
            }))
        )
        // Let's make sure to change the loading state to display the data
        .then(users => {
            this.setState({
                user,
                isLoading: false
            });
        })
        // We can still use the `.catch()` method since axios is promise-based
        .catch(error => this.setState({ error, isLoading: false }));
}*/


/*function local_getNews() {
    axios
        .get("test.flipkraft.ovh/api/news")
        .then(response => console.log(response))
        .catch(error => this.setState({ error, isLoading: false }));
}

function getNews() {
    // We're using axios instead of Fetch
    axios
    // The API we're requesting data from
        .get("test.flipkraft.ovh/api/news")
        // Once we get a response, we'll map the API endpoints to our props
        .then(response =>
            response.data.results.map(news => ({
                posttitle: `${news.posttitle}`,
                postImage: `${news.postImage}`,
                postdate: `${news.date}`,
                postContent: `${news.postContent}`,
                authorName: `${news.authorName}`,
                TotalComments: `${news.TotalComments}`,
                authorLink: `${news.authorLink}`,
                CommentsLink: `${news.CommentsLink}`,
                TagName: `${news.TagName}`,
                TagLink: `${news.TagLink}`
            }))
        )
        // Let's make sure to change the loading state to display the data
        .then(users => {
            this.setState({
                user,
                isLoading: false
            });
        })
        // We can still use the `.catch()` method since axios is promise-based
        .catch(error => this.setState({ error, isLoading: false }));
}*/

/*new.title = request.data.get('title')
new.message = request.data.get('message')
new.description = request.data.get('description')
new.user = request.user
new.date_modified = datetime.datetime.now()
new.date_created = datetime.datetime.now()*/

export default API;

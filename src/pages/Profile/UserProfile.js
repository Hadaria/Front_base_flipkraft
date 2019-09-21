import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import {HashRouter as Router} from "react-router-dom";


const DATA = {
    name: 'Holy Man',
    imgUrl: 'https://cdn4.vectorstock.com/i/thumb-large/70/33/avatar-hacker-man-vector-10607033.jpg',
    topic: '',
    post: '',
    date: ''
};

class UserProfile extends  React.Component {
    render() {
        return (
            <div>
            <NavBar />
            <Profile/>
            <Params />
            </div>
        );
    }
}
export default UserProfile

class Profile extends React.Component {
    render() {
        return (
            <div>
                <h1>Holy</h1>
                <img src="https://cdn4.vectorstock.com/i/thumb-large/70/33/avatar-hacker-man-vector-10607033.jpg"/>
            </div>
        );
    }
}

class Params extends React.Component {
    render() {
        return (
            <div>
                <h3>
                    Mes Statistiques
                </h3>
                <ul>
                    <li>Nombre de topics: 0</li>
                    <li>Nombre de posts: 0</li>
                    <li>Date de création : 01/08/2019</li>
                    <h2> EDIT </h2>
                </ul>
            </div>
        )
    }
}

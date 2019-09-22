import React, { Component, PropsTypes} from "react";
import NavBar from "../../components/NavBar";
import User from "../../components/User";
import axios from 'axios';
import {HashRouter as Router} from "react-router-dom";
import {UserAuthWrapper} from 'redux-auth-wrapper';
import PropTypes from "prop-types";


//redirect to login by default
/*const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.auth, //how to get the user state
    predicate: (auth) => auth.isAuthenticated, //funct to run vs the auth state to see if authenticated
    redirectAction: routerActions.replace, //the redux action to dispacth for redirect
    wrapperDisplayName: 'UserIsAuthenticated' //name for the auth check
});
*/

class UserProfile extends  React.Component {

    componentDidMount() {
        // We're using axios instead of Fetch
        //axios
        // The API we're requesting data from
        axios.get("test.flipkraft.ovh/api/me")
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <NavBar />


                <Profil profil={{name: "Holy", imgUrl:"https://cdn4.vectorstock.com/i/thumb-large/70/33/avatar-hacker-man-vector-10607033.jpg"}}/>
                <Params params={{topics: "42", posts: "142", date:"15 Septembre 2012"}}/>
            </div>
        );
    }
}
export default UserProfile


function Profil(props) {
    return (
        <div>
            <h1>{props.profil.name}</h1>
            <img src={props.profil.imgUrl}/>
        </div>
    )
}

function Params(props) {
    return (
        <div>
            <h3> Mes Statistiques</h3>
            <ul>
                <li>Nombre de topics: {props.params.topics}</li>
                <li>Nombre de posts: {props.params.posts}</li>
                <li>Date de création de compte: {props.params.date}</li>
            </ul>
            <h2>EDIT</h2>
        </div>
    )
}
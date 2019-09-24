import React from "react";
import NavBar from "../../components/NavBar";
import {HashRouter as Router} from "react-router-dom";
import {UserAuthWrapper} from 'redux-auth-wrapper';
import {forEach} from "react-bootstrap/utils/ElementChildren";
import {func} from "prop-types";

//redirect to login by default
/*const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.auth, //how to get the user state
    predicate: (auth) => auth.isAuthenticated, //funct to run vs the auth state to see if authenticated
    redirectAction: routerActions.replace, //the redux action to dispacth for redirect
    wrapperDisplayName: 'UserIsAuthenticated' //name for the auth check
});
*/

class UserProfile extends  React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            users: []

        }
    }
    componentDidMount() {
        this.setState({loading: true})
        fetch("http://test.flipkraft.ovh/api/user")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    loading: false,
                    users: response
                })
            })
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="Sign">
                    <div className="Sign__Aside">
                        <div className="Sign__Form">
                            <Profil profil={{name: "Holy", imgUrl:"https://cdn4.vectorstock.com/i/thumb-large/70/33/avatar-hacker-man-vector-10607033.jpg"}}/>
                                {this.state.users.map(function (item, index) {
                                    return (
                                        <div key={index}>
                                            <h1>{item.username}</h1>
                                        </div>
                                    )
                                })}
                            <Params params={{topics: "42", posts: "142", date:"15 Septembre 2012"}}/>
                        </div>
                    </div>
                </div>
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


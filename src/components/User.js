import React from 'react';

import axios from 'axios';

export default class User extends React.Component {
    state = {
        user: []
    }

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
                // Once we get a response, we'll map the API endpoints to our props
                /*.then(response =>
                    response.data.results.map(user => ({
                        username: `${response.username}`,
                        date_joined: `${response.date_joined}`,
                        last_login: `${response.last_login}`,
                        image: `${response.picture.thumbnail}`
                    }))
                )
                // We can still use the `.catch()` method since axios is promise-based
                .catch(error => this.setState({ error, isLoading: false }));*/

    }

    render() {
        return (
            <ul>
                { this.state.user.map(user => <li></li>)}
            </ul>
        )
    }
}

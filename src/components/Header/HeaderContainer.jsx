import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import  setUserData from '../../redux/authReducer'

export default class HeaderContainer extends React.Component  {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me" , {
                    withCredentials: true
                }
            )
            .then(response => {
              console.log(response)

            });
    }

    render() {
        return (
      <Header props={this.props}/>

        );
    }
}



import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const  Header = props => {

    return (
        <header className="header">
            <img className="logo" src="https://www.logogenie.net/download/preview/medium/3821905" alt="logo"/>
            <div className="loginBlock">
                <NavLink to={'/login'}>
                    Login
                </NavLink>
            </div>
        </header>

    );

}

export  default  Header
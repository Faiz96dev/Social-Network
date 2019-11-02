
import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const  Header = props => {
    debugger
    return (
        <header className="header">
            <img className="logo" src="https://www.logogenie.net/download/preview/medium/3821905" alt="logo"/>
            <div className="loginBlock">
                
                {props.isAuth 
             
                ? <div>{props.login} <button onClick={props.logout}>Log Out</button></div> 
                : <NavLink to={'/login'}>
                Login
            </NavLink> }


            </div>
        </header>

    );

}

export  default  Header
import React from "react";
import "./Nav.css";
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends'

const Nav = (props) => {
    return (
      <div className="nav">
        <div>
          <NavLink to="/profile">Profile</NavLink>;
        </div>
        <div>
          <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <div>
          <NavLink to="/music">Music</NavLink>
        </div>
        <div>
          <NavLink to="/news">News</NavLink>
        </div>
      {/* <Friends dispatch={props.dispatch} data={props.friends.navFriendsData} /> */}
      </div>
    );
  
}

export default Nav;

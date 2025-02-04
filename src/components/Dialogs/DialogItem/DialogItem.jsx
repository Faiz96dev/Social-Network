import React from 'react'
import { NavLink } from "react-router-dom";
const DialogItem = props => {
    return (
      <div className="item">
        <NavLink to={"/dialogs/" + props.id}> {props.name}</NavLink>
      </div>
    );
  };

  export default DialogItem
  
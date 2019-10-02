import React, {useEffect} from "react";
import "./Friends.css";
import {GetFirendsList} from "../../../redux/sidebarReducer";
const Friends = props => {


  let friendsElements = props.data.navFriendsData.map(nameFriends => (
    <div className="item__container">
      {" "}
      <img className="firends__img" src={nameFriends.url} alt="" />
      <p className="friends__name">{nameFriends.name}</p>
    </div>
  ));

  return (
    <div className="friends_container">
      <h2>Firends</h2>
   {friendsElements}
    </div>
  );
};

export default Friends;

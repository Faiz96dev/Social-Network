import React from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer"
const Profile = props => {
    debugger
  return (
    <main className="profile">
      <ProfileInfo />
      <PostsContainer store={props.store} />
    </main>
  );
};

export default Profile;

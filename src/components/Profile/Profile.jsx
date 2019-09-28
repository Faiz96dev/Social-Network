import React from "react";
import "./Profile.css";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  return (
    <main className="profile">
      <ProfileInfo />
      <Posts
        dispatch={props.dispatch}
        posts={props.posts}
      />
    </main>
  );
};

export default Profile;

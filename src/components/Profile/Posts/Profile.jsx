import React from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer"
const Profile = props => {
  return (
    <main className="profile">
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <PostsContainer store={props.store} />
    </main>
  );
};

export default Profile;

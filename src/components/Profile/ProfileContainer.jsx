import React from "react";
import "./Profile.css";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import {
  setUserProfile,
  getStatus,
  updateStatus
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    console.log(this.props)
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    if(!userId){
      this.props.history.push("/login")
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/ ` + userId)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
    this.props.getStatus(userId);
  }

  render() {
    return (
      <main className="profile">
        <Profile
          profile={this.props.profile}
          {...this.props}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </main>
    );
  }
}

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(
    mapStateToProps,
    { setUserProfile, getStatus, updateStatus }
  ),

  withAuthRedirect,
  withRouter
)(ProfileContainer);

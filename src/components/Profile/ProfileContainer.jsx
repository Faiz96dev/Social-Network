import React from "react";
import "./Profile.css";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile, getStatus, updateStatus } from "../../redux/profileReducer";
import { Redirect, withRouter } from "react-router-dom";
import { weithAuthRedirect, withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import Dialogs from "../Dialogs/Dialogs";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 4944;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/ ` + userId)
      .then(response => {
        this.props.setUserProfile(response.data);
        debugger
      });
      this.props.getStatus(userId)
    
  }

  render() {
    return (
      <main className="profile"> 
        <Profile profile={this.props.profile} {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />
      </main>
    );
  }
}

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps,{ setUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

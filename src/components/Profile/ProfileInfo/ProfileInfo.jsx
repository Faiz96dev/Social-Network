import React from 'react';
import './ProfileInfo.css'
import Preloader from "../../Common/preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
const ProfileInfo = props =>{

    if(!props.profile){
        return  <Preloader/>
    }
    return(
        <div>
<div className="img_container" >

</div>
<div className="profile_ifo">
  <div className="profile_img"></div>
  <div className="profile_ouner">
    <h3>About me : {props.profile.aboutMe}</h3>
    <p>Full name : {props.profile.fullName}</p>
      <img src={props.profile.photos.large}/>

      <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status}/>
  </div>
</div>
        </div>
    )
}

export default ProfileInfo
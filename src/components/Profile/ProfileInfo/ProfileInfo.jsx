import React from 'react';
import './ProfileInfo.css'
import Preloader from "../../Common/preloader/Preloader";
const ProfileInfo = props =>{

    if(!props.profile){
        return  <Preloader/>
    }
    return(
        <div>
<div className="img_container" >
<img className="img" src="https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/07/PRI_76089414.jpg?quality=90&strip=all&zoom=1&resize=644%2C429&ssl=1" alt=""/>
</div>
<div className="profile_ifo">
  <div className="profile_img"></div>
  <div className="profile_ouner">

    <h3>About me : {props.profile.aboutMe}</h3>
    <p>Full name : {props.profile.fullName}</p>
      <img src={props.profile.photos.large}/>
  </div>
</div>
        </div>
    )
}

export default ProfileInfo
import React from 'react';
import './ProfileInfo.css'
const ProfileInfo = props =>{
    return(
        <div>
<div className="img_container" >
<img className="img" src="https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/07/PRI_76089414.jpg?quality=90&strip=all&zoom=1&resize=644%2C429&ssl=1" alt=""/>
</div>
<div className="profile_ifo">
  <div className="profile_img"></div>
  <div className="profile_ouner">
    <h3>Faiz</h3>
    <p>Date of birth: 21.06.1996</p>
    <p>City: Bishkek </p>
    <p>Education: High </p>
    <p>Web Site: example </p>
  </div>
</div>
        </div>
    )
}

export default ProfileInfo
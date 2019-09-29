import React from 'react';
import './Post.css';

export default class Post extends React.Component  {
  render(props) {
  return (

<div className="post">
  <img className="post__img" src="https://member.imagineacademy.microsoft.com/sites/all/themes/custom/ita_members/images/microsoft-img.png" alt=""/>
  <p>{this.props.message} <br/> likes {this.props.likeCount}</p>
  
</div>


  );
}
}
 

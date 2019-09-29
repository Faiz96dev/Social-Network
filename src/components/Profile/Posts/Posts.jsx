import React from "react";
import "./Posts.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator } from '../../../redux/state'

const Posts = props => {
 



  const newPosts = props.profilePage.posts.map(data => (
    <Post message={data.message} likeCount={data.likeCount} />
  ));

  let newPost = React.createRef();

  let addPosts = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPost.current.value;
  
    let action = (updateNewPostActionCreator(text))
    props.dispatch(action)
  };

  return (
    <div className="post_inp">
      <h3>Create post</h3>
      <input
        onChange={onPostChange}
        value={props.profilePage.newPostText}
        ref={newPost}
        type="text"
      />
      <button onClick={addPosts} className="">
        Add post
      </button>
      {newPosts}
    </div>
  );
};

export default Posts;

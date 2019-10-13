import React from "react";
import "./Posts.css";
import Post from "./Post/Post";


const Posts = props => {
  const newPosts = props.posts.map(data => (
    <Post message={data.message} likeCount={data.likeCount} />
  ));

  let newPost = React.createRef();

  let onAddPost = () => {
      props.addPost()
  };

  let onPostChange = () => {
    let text = newPost.current.value;
        props.onPostChangeC(text)
debugger;
  };

  return (
    <div className="post_inp">
      <h3>Create post</h3>
      <input
        onChange={onPostChange}
        value={props.newPostText}
        ref={newPost}
        type="text"
      />
      <button onClick={onAddPost} className="">
        Add post
      </button>
      {newPosts}
    </div>
  );
};

export default Posts;

import React from "react";
import "./Posts.css";
import Post from "./Post/Post";

const Posts = props => {
  let newPost = React.createRef();

  let addPosts = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPost.current.value;
    console.log(text);
    props.updateNewPostText(text)
  };

  const newPosts = props.posts.map(data => (
    <Post message={data.message} likeCount={data.likeCount} />
  ));

  return (
    <div className="post_inp">
      <h3>Create post</h3>
      <input
        onChange={onPostChange}
        value={props.newPostText}
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

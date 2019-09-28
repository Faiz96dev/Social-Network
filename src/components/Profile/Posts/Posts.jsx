import React from "react";
import "./Posts.css";
import Post from "./Post/Post";



const Posts = props => {
  console.log(props)
  const newPosts = props.posts.map(data => (
    <Post message={data.message} likeCount={data.likeCount} />
  ));

  let newPost = React.createRef();

  let addPosts = () => {
    props.dispatch({
      type: 'ADD_POST',

    });
  };

  let onPostChange = () => {
    let text = newPost.current.value;
props.dispatch({

  type: 'UPDATE_NEW_POST_TEXT',
  text: text
})
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
      <button onClick={addPosts} className="">
        Add post
      </button>
      {newPosts}
    </div>
  );
};

export default Posts;

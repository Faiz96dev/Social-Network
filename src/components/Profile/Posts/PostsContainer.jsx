import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator
} from "../../../redux/profileReducer";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";

const PostsContainer = props => {


  return (
    <StoreContext.Consumer>
      { store => {
           let state = store.getState()
            let addPost = () => {
                let actionAdd = addPostActionCreator();
                store.dispatch(actionAdd);
              };
            
              let onPostChangeC = text => {
                let actionChange = updateNewPostActionCreator(text);
                store.dispatch(actionChange);
              };
         
   return <Posts
          newPosts={store.newPosts}
          onPostChangeC={onPostChangeC}
          addPost={addPost}
          newPostText={state.profilePage.newPostText}
          posts={state.profilePage.posts}
        />;
      }}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;

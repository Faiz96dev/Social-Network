import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator
} from "../../../redux/profileReducer";
import Posts from "./Posts";
import { connect } from "react-redux";



let mapStateToProps = state => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        newPosts: state.newPosts
    }
}


let mapDispathToProps = dispatch => {
    return {
        addPost: (newPostText) => { dispatch(addPostActionCreator(newPostText)) },
    }
}

const PostsContainer = connect(mapStateToProps, mapDispathToProps) (Posts)

export default PostsContainer;








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







// const PostsContainer = props => {


//   return (
//     <StoreContext.Consumer>
//       { store => {
//            let state = store.getState()
//             let addPost = () => {
//                 let actionAdd = addPostActionCreator();
//                 store.dispatch(actionAdd);
//               };
            
//               let onPostChangeC = text => {
//                 let actionChange = updateNewPostActionCreator(text);
//                 store.dispatch(actionChange);
//               };
         
//    return <Posts
//           newPosts={store.newPosts}
//           onPostChangeC={onPostChangeC}
//           addPost={addPost}
//           newPostText={state.profilePage.newPostText}
//           posts={state.profilePage.posts}
//         />;
//       }}
//     </StoreContext.Consumer>
//   );
// };
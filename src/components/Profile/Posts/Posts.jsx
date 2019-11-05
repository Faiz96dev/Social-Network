import React from "react";
import "./Posts.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {requiredField, maxLengthCreator} from '../../../utils/validators/validator'
import {Textarea} from '../../Common/FormsControls/FormsControls'

const Posts = React.memo(props => {
    const newPosts = props.posts.map(data => (
        <Post message={data.message} likeCount={data.likeCount}/>
    ));
    const onAddPost = (values) => {
        props.addPost(values.newPostText)
    };
    return (
        <div className="post_inp">
            <h3>Create post</h3>
            <AddPostFormRedux onSubmit={onAddPost}/>
            {newPosts}
        </div>
    );
})

let maxLength10 = maxLengthCreator(10)
const AddPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className="dialogs__textarea">
            <Field placeholder={'Add yours post'} name={"newPostText"} component={Textarea}
                   validate={[requiredField, maxLength10]}/>;
            <button>Send</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "AddPostForm"})(AddPostForm)
export default Posts;

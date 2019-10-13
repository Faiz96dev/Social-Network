const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
let initialState = {
    posts: [
        {id: 1, message: "widwidmwdm", likeCount: 4},
        {id: 2, message: "widw", likeCount: 1},
        {id: 3, message: "wvkla ef", likeCount: 39},
        {id: 4, message: "widwidffrfrfrf", likeCount: 4}
    ],
    newPostText: "123xxx"
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };

            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        }

        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state;
        }

        default:
            return state;

    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = text => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;

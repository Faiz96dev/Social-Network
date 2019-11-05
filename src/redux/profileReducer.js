import {profileAPI} from "../components/api/api";

const MY_PROFILE = "MY_PROFILE"
const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
let initialState = {
    posts: [
        {id: 1, message: "widwidmwdm", likeCount: 4},
        {id: 2, message: "widw", likeCount: 1},
        {id: 3, message: "wvkla ef", likeCount: 39},
        {id: 4, message: "widwidffrfrfrf", likeCount: 4}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            };
            return {...state, posts: [...state.posts, newPost]};
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };

        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };

        }

        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            };
        }
        default:
            return state;
    }
};

export const deletePost = postId => ({type: DELETE_POST, postId})
export const getMyProfile = (profile) => ({type: MY_PROFILE, profile})
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const updateNewPostActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getStatus = (id) => async (dispatch) => {
    let responce = await profileAPI.getStatus(id)
    dispatch(setStatus(responce.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let responce = await profileAPI.updateStatus(status)
    if (responce.data.resultCode === 0) {
        dispatch(setStatus(status))
    } else {
        console.log('ERROR UPDATE STATUS')
    }
}
export default profileReducer;

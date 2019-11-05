import {usersAPI as userAPI} from "../components/api/api";

const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CUTRRENT_PAGE = "SET_CUTRRENT_PAGE";
const TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


let usersPage = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = usersPage, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            };

        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };

        case SET_CUTRRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.toggle
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.toggle
                    ? [...state.followingInProgress, action.userid]
                    : state.followingInProgress.filter(id => id != action.userid)
            };

        default:
            return state;
    }
};

export const fetchFollowingProgress = (toggle, userid) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, toggle, userid});
export const follow = id => ({type: FOLLOW, id});
export const fetchLoaderToggler = toggle => ({type: TOGGLE_IS_FETCHING, toggle});
export const unFollow = id => ({type: UN_FOLLOW, id});
export const setUsers = users => ({type: SET_USERS, users});
export const setCurrentPage = currentPage => ({
    type: SET_CUTRRENT_PAGE,
    currentPage
});
export const setTotalUsersCount = totalCount => ({
    type: TOTAL_USERS_COUNT,
    totalCount
});

export const getUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(fetchLoaderToggler(true))
        dispatch(setCurrentPage(page))
        let data = await userAPI.getUsers(page, pageSize)
        dispatch(fetchLoaderToggler(false))
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount))

    }
}

export const followThunk = (id) => {
    return async (dispatch) => {
        dispatch(fetchFollowingProgress(true, id))
        let response = await userAPI.follow(id)
        if (response.data.resultCode === 0) {
            dispatch(follow(id))}
        dispatch(fetchFollowingProgress(false, id))
    }
}

export const unFollowThunk = (id) => {
    return async (dispatch) => {
        dispatch(fetchFollowingProgress(true, id))
        let response = await userAPI.unFollow(id)
        if (response.data.resultCode === 0) {
            dispatch(unFollow(id))}
        dispatch(fetchFollowingProgress(false, id))
    }
}


export default usersReducer;



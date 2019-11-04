import UsersAPI from "./UsersAPI";
import {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    fetchLoaderToggler,
    fetchFollowingProgress, getUsers, unFollowThunk, followThunk
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress, getIsAuth, getIsFetching,
    getPageSize, getTotalUsersCount, getUsersPage
} from "../../redux/users-selectors";

let mapStateToProps = state => {
    return {
        users: getUsersPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)

    };
};


export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {
            follow,
            unFollow,
            setUsers,
            setCurrentPage,
            setTotalUsersCount,
            fetchLoaderToggler,
            fetchFollowingProgress,
            getUsers,
            unFollowThunk,
            followThunk,

        })
)(UsersAPI)

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

let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth

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

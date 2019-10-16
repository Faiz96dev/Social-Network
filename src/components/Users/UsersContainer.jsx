import UsersAPI from "./UsersAPI";
import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC,toggleFetchingLoaderAC } from "../../redux/usersReducer";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};
let mapDispathToProps = dispatch => {
  return {
    follow: id => {
      dispatch(followAC(id));
    },

    unFollow: id => {
      dispatch(unFollowAC(id));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: totalCount => {
      dispatch(setUsersTotalCountAC(totalCount))
    },
    fetchLoaderToggler: toggle => {
      dispatch(toggleFetchingLoaderAC(toggle))
    }
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispathToProps
)(UsersAPI);

export default UsersContainer;

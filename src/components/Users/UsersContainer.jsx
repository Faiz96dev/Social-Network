import UsersAPI from "./UsersAPI";
import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  fetchLoaderToggler
} from "../../redux/usersReducer";
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

export default connect(
  mapStateToProps,
  {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    fetchLoaderToggler
  }
)(UsersAPI);

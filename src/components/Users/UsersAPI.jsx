import React from "react";
import Users from "./Users";
import Preloader from '../Common/preloader/Preloader'

 
class UsersAPI extends React.Component {
  componentWillMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = pageNumber => {
    this.props.getUsers(pageNumber, this.props.pageSize)

  };

  render() {
    return <> <div>  {this.props.isFetching ? <Preloader/> : null}</div>
  
    <Users  totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
     pages={this.props.pages} unFollow={this.props.unFollow} follow={this.props.follow}
     currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users}
            fetchFollowingProgress={this.props.fetchFollowingProgress}  followingInProgress={this.props.followingInProgress}
            unFollowThunk={this.props.unFollowThunk} followThunk={this.props.followThunk}
            isAuth={this.props.isAuth}
    />
     </>
  }
}

export default UsersAPI;

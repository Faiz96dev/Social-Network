import React from "react";
import Users from "./Users";
import * as axios from "axios";
import Preloader from '../Common/preloader/Preloader'
 
class UsersAPI extends React.Component {
  componentWillMount() {
    this.props.fetchLoaderToggler(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.fetchLoaderToggler(false)
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        
      });
  }
debugger
  onPageChanged = pageNumber => {
    this.props.fetchLoaderToggler(true)
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.fetchLoaderToggler(false)
        this.props.setUsers(response.data.items);
      });
      
  };

  render() {
    return <> <div>  {this.props.isFetching ? <Preloader/> : null}</div>
  
    <Users  totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
     pages={this.props.pages} unFollow={this.props.unFollow} follow={this.props.follow}
     currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users} />
     </>
  }
}

export default UsersAPI;

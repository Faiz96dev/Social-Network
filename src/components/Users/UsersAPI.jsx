import React from "react";
import Users from "./Users";
import * as axios from "axios";
import Preloader from '../Common/preloader/Preloader'
import {getUsers} from "../api/api";
 
class UsersAPI extends React.Component {
  componentWillMount() {
    this.props.fetchLoaderToggler(true)
    getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.fetchLoaderToggler(false)
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
        
      });
  }

  onPageChanged = pageNumber => {
    this.props.fetchLoaderToggler(true)
    this.props.setCurrentPage(pageNumber);
    getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.fetchLoaderToggler(false)
        this.props.setUsers(data.items);
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

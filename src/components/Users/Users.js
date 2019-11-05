import React from "react";
import userPhoto from "../../img/post_img.png";
import styles from "./Users.module.css";
import {NavLink, Redirect} from 'react-router-dom';
import Paginator from "../Common/Paginator/Paginator";


let Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className="pag">
  <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
      </div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
              <img
                className={styles.userImg}
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt=""
              />
              </NavLink>
            </div>
          </span>

          <div>
            {u.followed ? (
              <button disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => {
               props.unFollowThunk(u.id)
                }}
              >
                Unfollow
              </button>
            ) : (
              <button disabled={props.followingInProgress.some (id => id === u.id)}
                onClick={() => {
                 props.followThunk(u.id)
                }}
              >
                Follow
              </button>
            )}
          </div>

          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              {/* <div>{u.location.city}</div>
                  <div>{u.location.country}</div> */}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;

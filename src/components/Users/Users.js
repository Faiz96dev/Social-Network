import React from "react";
import userPhoto from "../../img/post_img.png";
import styles from "./Users.module.css";
import {NavLink} from 'react-router-dom';
import * as axios from "axios";

let Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }


  return (
    <div>
      <div className="pag">
        {pages.map(p => {
          return (
            <span
              id="pag"
              onClick={e => {
                props.onPageChanged(p);
              }}
              className={props.currentPage === p && styles.selectedPage}
            >
              {p}
            </span>
          );
        })}
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
              <button
                onClick={() => {
                    axios
                        .delete(
                            `https://social-network.samuraijs.com/api/1.0/follow/${u.id}` ,{
                                withCredentials:true,
                                headers:{
                                    "API-KEY": "93ecaf48-b0fe-4a38-b1d7-c9531ace3edb"
                                }

                            }
                        )
                        .then(response => {
                            if (response.data.resultCode === 0){
                                props.unFollow(u.id);
                            }

                        });



                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                    axios
                        .post(
                            `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {} ,{
                                withCredentials:true,
                                headers:{
                                    "API-KEY": "93ecaf48-b0fe-4a38-b1d7-c9531ace3edb"
                                }}
                        )
                        .then(response => {
                         if (response.data.resultCode === 0){
                             props.follow(u.id);
                         }

                        });

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

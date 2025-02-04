import React from "react";
import styles from "../../Users/Users.module.css";


let Paginator = props => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
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
    )}

export default Paginator;

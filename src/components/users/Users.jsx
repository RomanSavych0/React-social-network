import React from "react";
import defaultImg from "../../asserts/images/user.png";
import styles from '../users/users.module.css'
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalCountUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 6; i++) {
        pages.push(i);
    }

    return (<div className={styles.usersWwrapper}>


        <div className={styles.Pages}>
            {pages.map(p => {
                return <div className={p === props.currentPage && styles.selectedPage}
                            onClick={(e) => {
                                props.onPageChanged(p)
                            }}>
                    {p}</div>
            })}
        </div>

        {
            props.users.map(u =>
                <div key={u.id} className={styles.userItem}>

                    <div className={styles.usersData}>
                        <NavLink to={`/profile/${u.id}`}>
                        <div className={styles.userPhoto}>
                            <img src={u.photos.small != null ? u.photos.small : defaultImg}/>
                        </div>
                        </NavLink>
                        {u.followed
                            ? <button className={styles.unfollowButton} onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button className={styles.followButton} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>

                    <div className={styles.locationData}>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>


                </div>)
        }
        <div className={styles.loadMoreUsersButtonWrapper}>
            <button className={styles.loadMoreUsers} onClick={() => props.loadUsers()}>LoadMoreUsers</button>
        </div>
    </div>)


};

export default Users;

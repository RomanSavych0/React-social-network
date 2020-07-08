import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import preloader from '../../asserts/images/preloader.svg'
import {
    followSuccess,
    loadMoreUsers,
    setCurrentPage, setNewPageSize,
    setUsersCount,
    setUsers, toggleIsFetching,
    toggleIsFollowing, getUsersThunkCreator, unfollow, follow
} from "../../redux/usersReducer";
import Preloader from "../common/preloader/preloader";
import {UsersApi} from "../../api/Api";
import {compose} from "redux";
import {widthAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCountUsers,
    getUsers, getUsersSelector
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);

    };

    // loadUsers = () => {
    //     this.props.setCurrentPage(this.props.currentPage + 1);
    //     UsersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
    //         this.props.loadMoreUsers(data.items);
    //
    //     });
    // };

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);


    };

// {}

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users {...this.props} onPageChanged={this.onPageChanged}
                />}

        </>
    };


}


let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalCountUsers: getTotalCountUsers(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};
// let mapDispatchToProps = (dispatch) => {
//     return {
//         followSuccess: (userId) => {
//             dispatch(followSuccess(userId))
//         },
//         unfollowSuccess: (userId) => {
//
//             dispatch(unfollowSuccess(userId))
//         },
//
//         setUsers: (users) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPage(page))
//         },
//         setUsersCount: (count) => {
//             dispatch(setUsersCount(count))
//         },
//         loadMoreUsers: (users) => {
//             dispatch(loadMoreUsers(users))
//         },
//         setNewPageSize: (newSize) => {
//             dispatch(setNewPageSize(newSize))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching))
//
//         }
//
//     }
//
// };
export default compose(widthAuthRedirect, connect(mapStateToProps, {
    unfollow, setUsers, follow,
    setCurrentPage, setUsersCount, loadMoreUsers,
    setNewPageSize, toggleIsFetching, toggleIsFollowing,
    getUsers: getUsersThunkCreator
}))(UsersContainer);

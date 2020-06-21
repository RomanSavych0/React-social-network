import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import preloader from '../../asserts/images/preloader.svg'
import {
    follow,
    loadMoreUsers,
    setCurrentPage, setNewPageSize,
    setUsersCount,
    setUsers, toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import Preloader from "../common/preloader/preloader";

class UsersApiComponent extends React.Component {
    constructor(props) {
        super(props);


    };

    loadUsers = () => {
        this.props.setCurrentPage(this.props.currentPage + 1);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.loadMoreUsers(response.data.items);
        });
    };

    componentDidMount() {
        this.props.toggleIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);

            this.props.setUsersCount(response.data.totalCount);

            this.props.setUsers(response.data.items);
        });


    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);

            this.props.setUsers(response.data.items);
        });
    };

// {}

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users totalCountUsers={this.props.totalCountUsers} pageSize={this.props.pageSize} currentPage=
                    {this.props.currentPage} users={this.props.users}
                       onPageChanged={this.onPageChanged}
                       loadUsers={this.loadUsers}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}

                />}

        </>
    };


}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCountUsers: state.usersPage.totalCountUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
};
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId) => {
//
//             dispatch(unfollow(userId))
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


export default connect(mapStateToProps, {follow,
    unfollow, setUsers, setCurrentPage,
    setUsersCount, loadMoreUsers,
    setNewPageSize, toggleIsFetching}
)(UsersApiComponent);
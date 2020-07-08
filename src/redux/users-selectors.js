import {createSelector} from "reselect";

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};
const getUsers = (state) => {
    return state.usersPage.users;
};
export const getUsersSelector = createSelector(getUsers,
    (users) => {
        return users.filter(u => true)
    });

export const getTotalCountUsers = (state) => {
    return state.usersPage.totalCountUsers;
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};
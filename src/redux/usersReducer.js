import {UsersApi} from "../api/Api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const LOAD_MORE_USERS = 'LOAD-MORE-USERS';
const SET_PAGE_SIZE = 'SET-PAGE-SIZE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const FOLLOWING_IS_FETHING = 'FOLLOWING-IS-FETCHING';
let initialState = {
    users: [],
    pageSize: 3,
    totalCountUsers: 20,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],

};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalCountUsers: action.totalUsersCount};
        case LOAD_MORE_USERS:
            return {...state, users: state.users.concat(action.users)};

        case SET_PAGE_SIZE:
            return {...state, pageSize: action.newPageSize};
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case FOLLOWING_IS_FETHING: {
            return {
                ...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
            }

        default:
            return state;
    }

};

export const followSuccess = (userId) => {
    return {type: FOLLOW, userId: userId}
};

export const unfollowSuccess = (userId) => {
    return {type: UNFOLLOW, userId: userId}
};

export const setUsers = (users) => {
    return {type: SET_USERS, users}
};
export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
};
export const setUsersCount = (totalUsersCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount}
};
export const loadMoreUsers = (users) => {
    return {type: LOAD_MORE_USERS, users}
};
export const setNewPageSize = (newPageSize) => {
    return {type: SET_PAGE_SIZE, newPageSize}
};

export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
};

export const toggleIsFollowing = (isFetching, userId) => {
    return {type: FOLLOWING_IS_FETHING, isFetching, userId}
};

export const getUsersThunkCreator = (currentPage , pageSize) =>{

  return (dispatch) => {
      dispatch(setCurrentPage(currentPage));
      dispatch(toggleIsFetching(true));
      UsersApi.getUsers(currentPage, pageSize).then(data => {
          dispatch(toggleIsFetching(false));

          dispatch(setUsersCount(data.totalCount));
          dispatch(setUsers(data.items));
      })
  }

};
export const unfollow = (userId) =>{

  return (dispatch) => {
      dispatch(toggleIsFollowing(true  , userId));

      UsersApi.unfollowAPI(userId).then(response => {
          if (response.data.resultCode === 0) {
              dispatch(unfollowSuccess(userId));

          }
          dispatch(toggleIsFollowing(false  , userId));

      });

  }


};
export const follow = (userId) =>{

  return (dispatch) => {
      toggleIsFollowing(true  , userId);
      UsersApi.followAPI(userId).then(response => {
          if (response.data.resultCode === 0) {
              dispatch(followSuccess(userId));
          }
          dispatch(toggleIsFollowing(false  , userId));

      });

  }


};




export default usersReducer;
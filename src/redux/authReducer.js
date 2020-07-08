import { AuthAPI } from "../api/Api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      console.log(action.data);
      return {
        ...state,
        userId : action.data.userId,
        email : action.data.email,
        login : action.data.login,
        isAuth : action.data.isAuth,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => {

  return { type: SET_USER_DATA, data: { userId, email, login, isAuth} };
};

export const getAuthUserData = () => (dispatch) => {
  return AuthAPI.getAuthData().then((response) => {
    if (response.status  === 200) {
      let { email , id , login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });



};

export const login = (email, password, rememberMe = false) => (dispatch) => {
  AuthAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let errorMessage = response.data.messages[0];
      if (errorMessage.length > 0) {
        let action = stopSubmit("login", { _error: errorMessage });
        dispatch(action);
      }
    }
  });
};

export const logout = () => {
  return (dispatch) => {
    AuthAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};
export default authReducer;

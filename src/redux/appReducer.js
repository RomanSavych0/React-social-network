import { getAuthUserData } from "./authReducer";

const INITIALIZE_APP = "INITIALIZE-APP";
const INITIALIZED_SUCCSES = "INITIALIZE-APP";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCSES:
      console.log(1);
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};
export const initializedSuccses = () => ({ type: INITIALIZED_SUCCSES });

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(
        () => {
          dispatch(initializedSuccses());
        }
    );
  }
};

export default appReducer;

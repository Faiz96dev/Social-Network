import { authAPI } from "../components/api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth }
});

export const login = (email, password, rememberMe) => dispatch => {
  authAPI.login(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData());
    } else {
      console.log(" Login error");
    }
  });
};

export const logout = () => dispatch => {
  console.log('logout')
  authAPI.logOut()
  .then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
      console.log(initialState)
    }
  });
};

export default authReducer;

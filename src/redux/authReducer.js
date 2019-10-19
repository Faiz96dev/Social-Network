const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CUTRRENT_PAGE = "SET_CUTRRENT_PAGE";
const TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


let usersPage = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
};

const usersReducer = (state = usersPage, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.id) {
            return { ...user, followed: true };
          }
          return user;
        })
      };

    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.id) {
            return { ...user, followed: false };
          }
          return user;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      };

    case SET_CUTRRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount
      };
      case TOGGLE_IS_FETCHING:
        return {
          ...state,
          isFetching: action.toggle
        };

    default:
      return state;
  }
};

export const follow = id => ({ type: FOLLOW, id });
export const fetchLoaderToggler = toggle => ({ type: TOGGLE_IS_FETCHING, toggle });
export const unFollow = id => ({ type: UN_FOLLOW, id });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = currentPage => ({
  type: SET_CUTRRENT_PAGE,
  currentPage
});
export const setTotalUsersCount = totalCount => ({
  type: TOTAL_USERS_COUNT,
  totalCount
});

export default usersReducer;



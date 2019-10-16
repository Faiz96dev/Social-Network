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

export const followAC = id => ({ type: FOLLOW, id });
export const toggleFetchingLoaderAC = toggle => ({ type: TOGGLE_IS_FETCHING, toggle });
export const unFollowAC = id => ({ type: UN_FOLLOW, id });
export const setUsersAC = users => ({ type: SET_USERS, users });
export const setCurrentPageAC = currentPage => ({
  type: SET_CUTRRENT_PAGE,
  currentPage
});
export const setUsersTotalCountAC = totalCount => ({
  type: TOTAL_USERS_COUNT,
  totalCount
});

export default usersReducer;

// { id: 1, photoURL:'https://www.w3schools.com/w3images/avatar2.png', fullname: "Victor Ivanov", status:'bla, bla', location:{city: 'Minsk', country: 'Belarus'}, followed: false },
// { id: 2, photoURL:'https://www.w3schools.com/w3images/avatar2.png', fullname: "Victor Pupkin", status:'hui pizda Jigurga', location:{city: 'Siktivkar', country: 'Russia'}, followed: false },
// { id: 3, photoURL:'https://www.w3schools.com/w3images/avatar2.png', fullname: "Almaz Sabirov", status:'kyrgystan popret', location:{city: 'Osh', country: 'Kyrgyzstan'}, followed: true },
// { id: 4, photoURL:'https://www.w3schools.com/w3images/avatar2.png', fullname: "Ali Efazov", status:'Habib bibip', location:{city: 'Groznyi', country: 'Kavkaz'}, followed: false },
// { id: 5, photoURL:'https://www.w3schools.com/w3images/avatar2.png', fullname: "Piere Lucio", status:'Ce la vie', location:{city: 'Paris', country: 'France'}, followed: false },
// { id: 6, photoURL:'https://www.w3schools.com/w3images/avatar2.png', fullname: "John Doe", status:'g 59 the best blya budu', location:{city: 'New Orlean', country: 'USA'}, followed: true },

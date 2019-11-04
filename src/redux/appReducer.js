import {authAPI} from "../components/api/api";
import {stopSubmit} from 'redux-form'
import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
    initialaized: false,

};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
              initialaized: true
            };

        default:
            return state;
    }
};

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
});


export const initializeApp = () => (dispatch) => {
 let  promise = dispatch(getAuthUserData())
  Promise.all([promise])
      .then(() =>{
    dispatch(initializedSuccess())
  })


}



export default appReducer;

import Users from '../Users/Users'
import {
    followAC,
    unFollowAC,
    setUsersAC
} from "../../redux/usersReducer";
import { connect } from "react-redux";

let mapStateToProps = state => {
   console.log(state)
return {
    users: state.usersPage.users
}


}
let mapDispathToProps = dispatch =>{
    return{
        
       follow: (id) => {
        dispatch(followAC(id))
       },

       unFollow: (id) => {
           dispatch(unFollowAC(id))
       },
       setUsers: (users) => {
           dispatch(setUsersAC(users))
       }
      
    }
}

const UsersContainer = connect(mapStateToProps, mapDispathToProps) (Users)

export default UsersContainer;

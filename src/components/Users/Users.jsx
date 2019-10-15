import React from 'react'
import './Users.css'
const Users = props => {

return <div>
    {
    
        props.users.map(u => 
            <div key={u.id} >
                <span><div><img className="user-img" src={u.photoURL} alt=""/></div></span>

                <div>
                    {u.followed 
                        ?  <button onClick={() => {props.unFollow(u.id)}}>Unfollow</button> 

                         : <button onClick={props.follow(u.id)} >Follow</button>}
                   
                    
                    </div>

                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>

            </div>

            )
        
        
        }
</div>
}

export default Users
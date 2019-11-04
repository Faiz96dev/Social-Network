import React, {useState} from "react";
import "./ProfileStatus.css";

const ProfileStatusWithHooks = props => {
let [editMode, setEditMode] = useState(false)


  const activateEditMode =()=> {

  setEditMode(true)

  }

  return (
        <div>

            {!editMode &&
            <div>
            <span onDoubleClick={activateEditMode}>
              {props.status || '---------'}
            </span>
            </div>
            }

            {editMode &&
            <div>
                <input autoFocus={true}
                ></input>
            </div>
            }
        </div>
    );

}

export default ProfileStatusWithHooks;

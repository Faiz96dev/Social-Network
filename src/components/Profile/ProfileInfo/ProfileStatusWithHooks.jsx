import React, {useEffect, useState} from "react";
import "./ProfileStatus.css";

const ProfileStatusWithHooks = props => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() =>{
        setStatus(props.status)
    },[props.status])

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    const activateEditMode = () => {
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
                <input value={status} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                ></input>
            </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;

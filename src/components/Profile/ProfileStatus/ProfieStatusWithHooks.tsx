import React, {ChangeEvent, useState} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: PropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {
                editMode
                    ? <div>
                        <input onChange={onStatusChange} onBlur={deactivateEditMode} value={status} autoFocus/>
                    </div>
                    : <div>
                        <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
                    </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks
import {useState} from "react";

const Role = () => {
    const [roleType, setRoleType] = useState<string>('')


    return(
        <div className={'role_content'}>
            <div className="role_header">
                <h2>Choose role</h2>
            </div>
            <div className="role_body">
                <button className={`role ${roleType === 'participant' ? 'active' : null}`} onClick={() => setRoleType('participant')}>
                    participant
                </button>
                <button className={`role ${roleType === 'admin' ? 'active' : null}`} onClick={() => {setRoleType('admin')}}>
                    admin
                </button>
            </div>
            <div className="role_footer">
                <button className={`confirm ${roleType === 'participant' || roleType === 'admin' ? `active` : null}`}>next</button>
            </div>
        </div>
    )
}

export default Role;
import {useState} from "react";
import {useNavigate} from "react-router-dom";
// import {Navigate} from "react-router-dom";

const Role = () => {
    const [roleType, setRoleType] = useState<string>('')
    const navigate = useNavigate()


    const next = () => {
        const contentId:any = document.getElementById('role_content');
        contentId.classList.add('disActive');

        if(roleType === 'participant'){
            setTimeout(() => {
                navigate('/participant')
            }, 1200)
        }
    }

    return(
        <div className={'role_content'} id={'role_content'}>
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
                <button className={`confirm ${roleType === 'participant' || roleType === 'admin' ? `active` : null}`} onClick={next}>next</button>
            </div>
        </div>
    )
}

export default Role;
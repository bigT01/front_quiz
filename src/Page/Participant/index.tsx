import Login from "../../components/Participant/Login/Login";
import {useState} from "react";
import Confirm from "../../components/Participant/Confirm/Confirm";

const Participant = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const [isConfirm, setIsConfirm] = useState<boolean>(false)

    return(
        <div className={'participant_page'}>
            <div className="participant_content">
                <div className="content_header">
                    <h2>Participant</h2>
                </div>
                <div className="content_body">
                    {!isLogin && <Login setIsLogin={setIsLogin}/>}
                    {isLogin && !isConfirm && <Confirm />}
                </div>
            </div>
        </div>
    )
}

export default Participant
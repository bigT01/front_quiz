import s from './Login.module.css'
import React, {useState} from "react";

type Props = {
    setIsLogin: Function
}

const Login: React.FC<Props> = ({setIsLogin}) => {
    const [name, setName] = useState<string>('');
    const [isNext, setIsNext] = useState<boolean>(false)


    const next = () => {
        document.cookie = `ParticipantName = ${name}`
        setIsNext(true)
        setTimeout(() => {
            setIsLogin(true)
        }, 1200)
    }

    return(
        <div className={`${s.login } ${isNext ? s.passed : null }`}>
            <h3>Enter your name to continue</h3>
            <input type="text" className={s.inputLogin} onChange={e => setName(e.target.value)}/>

            <div className={s.loginBtnWrapper}>
                <button className={`${s.loginBtn} ${name ? `${s.active}` : null}`} onClick={next}>next</button>
            </div>
        </div>
    )
}

export default Login;
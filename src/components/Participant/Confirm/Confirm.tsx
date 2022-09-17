import s from './confirm.module.css'
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Confirm = () => {
    const [name, setName] = useState<string>('')
    const navigate:any = useNavigate()

    const next = () => {
        const pageId:any = document.getElementById('participant')
        pageId.classList.add('disActive')

        setTimeout(() => {
            navigate('/participant/quiz')
        }, 1200)
    }

    function getCookie(cname:string) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    useEffect(() => {
        const userName:string = getCookie('ParticipantName');
        setName(userName)
    }, [])

    return(
        <div className={s.confirm}>
            <div className={s.header}>
                <h3><span className={s.green}>Welcome</span> {name}</h3>
            </div>
            <div className={s.body}>
                <p>This quiz contain <span className={s.red}>15</span> questions. <span className={s.red} >5</span> questions about <span className={s.htmlCl}>HTML</span>, <span className={s.red} >5</span> questions about <span className={s.cssCL}>CSS</span>, <span className={s.red} >5</span> questions about <span className={s.jsCL}>Javascript</span>.</p>
                <p>Each subsequent question will be more difficult. To finish the quiz enter button "<span className={s.green}>finish</span>". End of the quiz you will can get certificate.</p>
                <p>Good luck for every one ;)</p>
            </div>

            <div className={s.loginBtnWrapper}>
                <button className={`${s.loginBtn} ${s.active}`} onClick={next}>Start</button>
            </div>
        </div>
    )
}

export default Confirm;
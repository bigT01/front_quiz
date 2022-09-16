import Typed from "react-typed";
import React, {useEffect} from "react";

type Props = {
    setIsEnd: Function
}

const IntroTitle: React.FC<Props> = ({setIsEnd}) => {
    useEffect(() => {
        window.document.body.style.overflow = 'hidden';
        const introTitle: any = document.getElementById('intro_title');

        setTimeout(() => {
            window.document.body.style.removeProperty('overflow');
        }, 5000)

        setTimeout(() => {
            introTitle.style.display = 'none'
        }, 7000)
    }, [])
    return(
        <div className="content_title" id={'intro_title'}>
            <Typed strings={['Welcome', 'Lets start our quiz :)',]}
                   typeSpeed={70}
                   backSpeed={80}
            />
        </div>
    )
}

export default IntroTitle
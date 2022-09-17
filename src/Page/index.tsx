import IntroTitle from "../components/Intro/IntroTitle/IntroTitle";
import Role from "../components/Intro/Role/Role";
import React, {useState} from "react";

const Home = () => {
    const [isEnd, setIsEnd] = useState<boolean>(false);


    return(
        <div className="presentation_content">
            {!isEnd && < IntroTitle setIsEnd={setIsEnd}/>}
            {isEnd && <Role />}
        </div>
    )
}

export default Home;
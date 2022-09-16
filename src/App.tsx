import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import IntroTitle from "./components/Intro/IntroTitle/IntroTitle";
import Role from "./components/Intro/Role/Role";

function App() {
    const [isEnd, setIsEnd] = useState<boolean>(false)

    return (
    <div className="content_wrapper">
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;600;700&display=swap"
                  rel="stylesheet" />
        </Helmet>
        <div className="presentation_content">
            {!isEnd && < IntroTitle setIsEnd={setIsEnd}/>}
            {isEnd && <Role />}
        </div>
    </div>
  );
}

export default App;

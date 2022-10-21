import {useState} from "react";
import TabButton from "../../components/tabButton/TabButton";

const QuizPage = () => {
    const [tabPage, setTabPage] = useState<number>(1);




    return(
        <div className={'quiz_page'}>
            <div className="quiz_content">
                <div className="tab_wrapper">
                    <TabButton tabNumber={tabPage} setTabNumber={setTabPage}/>
                </div>
                <div className="quiz-information">
                    <div className="title"><h4>1. What is HTML?</h4></div>

                </div>
            </div>
        </div>
    )
}

export default QuizPage;
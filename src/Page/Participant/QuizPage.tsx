import {useState} from "react";
import TabButton from "../../components/tabButton/TabButton";
import State from "../../state/State";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import CheckBoxForm from "../../components/CheckBoxForm/CheckBoxForm";

interface answers {
    id: number,
    answer: number
}


const QuizPage = () => {
    const [tabPage, setTabPage] = useState<number>(1);
    const [AnswerList, setAnswerList] = useState<answers[]>([])

    console.log(AnswerList)
    return(
        <div className={'quiz_page'}>
            <div className="quiz_content">
                <div className="tab_wrapper">
                    <TabButton tabNumber={tabPage} setTabNumber={setTabPage}/>
                </div>
                <div className="quiz-information">
                    <div className="title"><h4>{State[0].html[tabPage-1]?.question}</h4></div>
                    <div className="selection_wrapper">
                        <CheckBoxForm id={State[0].html[tabPage-1]?.id} state={State[0].html[tabPage-1]?.variants} AnswerList={AnswerList} setAnswerList={setAnswerList}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizPage;
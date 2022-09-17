import { Routes, Route,} from "react-router-dom";
import Participant from "../Page/Participant";
import Home from "../Page";
import QuizPage from "../Page/Participant/QuizPage";

const RouesPage = () => {
    return(
        <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/participant" element={<Participant />} />
            <Route path="/participant/quiz" element={<QuizPage />} />
        </Routes>
    )
}

export default RouesPage
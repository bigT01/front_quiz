import { Routes, Route,} from "react-router-dom";
import Participant from "../Page/Participant";
import Home from "../Page";

const RouesPage = () => {
    return(
        <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/participant" element={<Participant />} />
        </Routes>
    )
}

export default RouesPage
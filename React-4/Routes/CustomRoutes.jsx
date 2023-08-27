import { Route, Routes } from "react-router-dom";
import Homepage from "../src/Components/Homepage";

function CustomRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Homepage/>}/>
        </Routes>
    )
}

export default CustomRoutes;
import { Route, Routes } from "react-router-dom";
import GetImage from "../src/Components/Display/GetImage";
import ImageDetails from "../src/Components/About/ImageDetails";

function CustomRoute() {
    return (
        <Routes>
            <Route path="/" element={<GetImage/>} />
            <Route path="/ImageDetails/:id" element={<ImageDetails/>}/>
        </Routes>
    )
}

export default CustomRoute;
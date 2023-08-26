import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ImageDetails.css'
function ImageDetails() {
    const {id} = useParams();
    
    const [Details, setDetails] = useState({});

    async function getDetails(id) {
        let response = await axios(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        let result = await response.data.photo;
        setDetails(result);
    }

    useEffect(() => {
        getDetails(id);
    },[]);
    return (
        <div className="about">
            <div className="image">
                <img src={Details.url} />
            </div>
            <div className="details">
                <span><h1>{Details.title}</h1></span>
                <p>{Details.description}</p>
            </div>
        </div>
    )
}

export default ImageDetails;
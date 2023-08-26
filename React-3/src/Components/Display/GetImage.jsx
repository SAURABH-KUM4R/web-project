import { useEffect, useState } from "react";
import axios from 'axios';
import Displayimage from "./Displayimage";
import './GetImage.css'
function GetImage() {
    const [imageList, setImagelist] = useState([]);

    async function downloadImage() {
        let response = await axios("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20");
        let result = await response.data.photos;
        let list = result.map((data) => {
            return {
                id: data.id,
                url: data.url,
                title: data.title,
                user: data.user
            }
        })
        setImagelist(list);
    }

    useEffect(() => {
        downloadImage();
    },[]);

    return (
        <div className="display">
            {
                imageList.map((Element) => <div key={Element.id} className="imgDiv"><Displayimage url={Element.url} id = {Element.id}/></div>)
            }
        </div>
    )
}

export default GetImage;
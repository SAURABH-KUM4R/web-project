import { Link } from "react-router-dom"

function Displayimage({ url, id }) {
    return (
        <>
            <Link to={`/ImageDetails/${id}`} >
                <img src={url}/>
            </Link>
        </>
    )
}

export default Displayimage;
function Displayprofile({ image, name }) {
    return (
        <>
            <div className="avtar">
                <img src={image} alt="" />
                <br />
                <span>{name}</span>
            </div>
        </>
    )
}

export default Displayprofile;
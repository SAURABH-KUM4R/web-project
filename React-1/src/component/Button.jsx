function Button(params) {
    return (
        <div>
            <button id="button" onClick={params.onClick}>{params.text}</button>
        </div>
    )
}

export default Button;
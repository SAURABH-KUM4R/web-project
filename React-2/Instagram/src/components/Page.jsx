import { useState } from "react";
import './Page.css'

function Page() {
    const [isLogin, setlogin] = useState(true);

    function changeLogin() {
        setlogin(!isLogin)
    }

    return (
        <div className="container">
            <div className="input">
                <h1>Instagram</h1>
                <input type="text" hidden={isLogin} placeholder="Mobile Number or Email"/>
                <input type="text" hidden={isLogin} placeholder="Full Name"/>
                <input type="text" placeholder="Phone number, username, or email"/>
                <input type="password" placeholder="Password" />
                <button onClick={changeLogin}>{isLogin?"Sign In":"Sign Up"}</button>
            <div className="footer">
                {isLogin?"Don't have account?":"have an account?"} <a href="#">{isLogin?"Sign Up":"Sign In"}</a>
            </div>
            </div>
        </div>
    )
}

export default Page;
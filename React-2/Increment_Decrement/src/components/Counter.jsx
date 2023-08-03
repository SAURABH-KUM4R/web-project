import { useState } from "react";
import './Counter.css'
function Counter() {
    const [X, setX] = useState(0);
    return (
        <div className="container">
            <div className="innerState">
                <p>{X}</p>
                <div className="button">
                    <button onClick={() => setX(X+1)}>Increment</button>
                    <button onClick={() => setX(X-1)}>Decrement</button>
                </div>
            </div>
        </div>
    )
}
export default Counter;
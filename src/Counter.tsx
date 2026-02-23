import { useState } from "react";

export function Counter() {
    const [ count, setCount ] = useState(1);
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <div id="i1">
            <button onClick={handleClick}>
                Count is {count}
            </button>
        </div>
    )
}

import { useState } from "react";

export function ToggleMessage() {
    const [value, flipValue] = useState(false);

    function flip() {
        flipValue(val => !val);
    }
    return <div>
        <button onClick={flip}>Click here </button>
        {value ? <pre>This message is conditionaly rendered</pre> : null}
    </div>
}
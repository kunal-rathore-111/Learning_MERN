

import { useRef, useState } from "react";

export const OtpComponent = () => {

    const refArr = useRef(Array(4).fill(0));
    console.log(refArr);

    return <div>
        <div>
            {refArr.current.map((r, i) => {

                return <OtpInput
                    key={i}
                    reference={(e) => { refArr.current[i] = e }}
                    onDone={() => { if (i + 1 < 4) refArr.current[i + 1].focus() }}
                    onBack={() => { if (i > 0) refArr.current[i - 1].focus() }}
                >
                </OtpInput>
            })}
        </div>
        <div>
            Submit Button here
        </div>
    </div>
}

const OtpInput = ({ reference, onDone, onBack }) => {

    const [val, setVal] = useState(0);


    function check(e) {

    }
    return <input
        ref={reference}
        value={val}
        type="text"
        className="h-[40px] w-[30px] bg-blue-300 text-center rounded m-1"
        onKeyUp={(e) => {
            if (e.key == "Backspace") {
                setVal(0);
                onBack();
            }
        }}
        onChange={(e) => {
            const stringValue = e.target.value.split('')[1];
            const value = Number(stringValue);
            if (value >= 0 && value <= 9) {
                setVal(value);
                onDone();
            }
        }} />
}
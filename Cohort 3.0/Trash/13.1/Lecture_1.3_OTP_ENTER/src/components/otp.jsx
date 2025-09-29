
import { useRef, useState } from "react";

export const Otp = () => {

    const refArr = useRef(Array(4).fill(0));


    return <div className="flex flex-col gap-2">
        <div>
            {refArr.current.map((r, i) => {
                return <OtpBox
                    key={i}
                    reference={(e) => { refArr.current[i] = e }}
                    onDone={() => { if (i + 1 < 4) refArr.current[i + 1].focus() }}
                    onBack={() => { if (i > 0) refArr.current[i - 1].focus() }}
                />
            })}
        </div>
        <span className="cursor-pointer text-lg text-white rounded-md border-[3px] px-5 py-1 text-center">
            Submit
        </span>
    </div>
}

const OtpBox = ({ reference, onDone, onBack }) => {


    const [value, setValue] = useState(0);

    return <input
        ref={reference}
        type="text"
        value={value}
        className="bg-blue-200 h-[40px] w-[30px] rounded-md m-1 text-center"

        onKeyUp={(e) => {
            if (e.key === "Backspace") {
                setValue(0);
                onBack();
            }
        }}

        onChange={(e) => {

            const splitValue = e.target.value.split('')[1];
            const val = Number(splitValue);
            if (val >= 0 && val <= 9) {
                setValue(val);
                onDone();
            }

        }}
    />
}
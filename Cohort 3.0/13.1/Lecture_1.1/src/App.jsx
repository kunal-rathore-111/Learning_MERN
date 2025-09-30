
// 1 flex and color in tw
export default function App() {
    return <>
        <div className="flex justify-evenly ">
            <div className="bg-red-300">Hi1</div>
            <div className="bg-blue-300">Hi2</div>
            <div className="bg-yellow-300">Hi3</div>
        </div>

        <br />
        {/* // 2 flex and color in tw */}
        <div className="grid grid-cols-20 ">
            <div className="col-span-5 bg-red-400">Hi1</div>
            <div className=" col-span-5 bg-blue-300">Hi2</div>
            <div className="col-span-10 bg-yellow-300">Hi3</div>
        </div>

        <br />

        {/* // 3 responsiveness in tw  'moblie first approach'*/}
        <div className="xl:bg-pink-300 lg:bg-yellow-300  md:bg-green-300 sm:bg-blue-400  bg-red-300 ">
            <div className="flex justify-evenly">
                <div className="bg-red-400">Hi1</div>
                <div className="bg-blue-300">Hi2</div>
                <div className="bg-yellow-300">Hi3</div>
            </div>
        </div>
        <br />
        {/* 3.1 Inside class assignment */}
        <div className="grid grid-cols-12">
            <h4 className="col-span-12 md:col-span-4 bg-red-300"> HI1</h4>
            <h4 className="col-span-12 md:col-span-5 bg-yellow-300">HI2</h4>
            <h4 className="col-span-12 md:col-span-3 bg-green-300">HI3</h4>
        </div>

        <br />
        {/* 4 Color and text color and text size */}

        <div className="bg-blue-200 text-brown-400 text-2xl " >
            <h4>THis is div </h4>
            <h4>THis is div two</h4>
        </div>


        {/* 5 Rounded-s (border radius)     NOT WORKING*/}
        <h4 className="text-4xl rounded-s-full">This is rounded circle</h4>

    </>
}
import { CgGames } from "react-icons/cg"
import Imagee from "../public/images/panda.png"
import { FaTimes } from "react-icons/fa"
import { TbHours24, TbView360Number } from "react-icons/tb"
import { AnimatePresence, easeInOut, motion } from "motion/react"
import { BiHome } from "react-icons/bi"
import { IoAddCircleOutline } from "react-icons/io5"
import { useState } from "react"

export default function CardComp() {

    const [show, setShow] = useState(true);
    const [isHover, setisHover] = useState(false);
    const list = [
        { Icon: CgGames, text: "Here you will explore games" },
        { Icon: TbHours24, text: " Available 24hrs" },
        { Icon: BiHome, text: "Home welcome back" },
        { Icon: TbView360Number, text: "360 view of homes" },
        { Icon: IoAddCircleOutline, text: "Create project" },
    ]

    const parentListVariant = {
        onHover: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.3,
                staggerChildren: 0.25, delayChildren: 0.3
            }
        },

        exit: {
            scale: 0.98,
            transition: {
                duration: 0.3,
                staggerChildren: 0.25,
                staggerDirection: -1,
            }
        }
    }
    const listVariant = {
        onHover: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    }
    return <>
        {
            <AnimatePresence>
                {show ?
                    <motion.div
                        className="flex flex-col h-150 w-105  bg-gray-100 rounded-xl  shadow-gray-500 shadow-[0px_4px_8px_rgba(17,17,16,0.1),0px_8px_10px_rgba(17,17,16,0.1),0px_6px_16px_rgba(17,17,26,0.1)] text-black  p-11"

                        animate={{
                            filter: "blur(0px)",
                            scale: 1,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.4, ease: easeInOut,

                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.98,
                            filter: "blur(10px)"
                        }}
                    >

                        <div className="flex flex-col " >
                            <h3 className="text-[24px] font-bold">
                                Kunal
                            </h3>
                            <span className="text-lg text-gray-600 mt-2">
                                hello, welcome to the page</span>
                        </div>

                        <div className=" flex justify-center">
                            <div className="flex gap-2  shadow-[0px_4px_8px_rgba(17,17,16,0.1),0px_8px_10px_rgba(17,17,16,0.1),0px_6px_16px_rgba(17,17,26,0.1)]  rounded-xl px-2 py-1 justify-center items-center mt-10  w-fit ">
                                <img src={Imagee} alt="image" width={30} />
                                <h4 className="font-semibold text-lg">Kunal</h4>
                                <FaTimes
                                    onClick={() => {
                                        console.log("hi ")
                                        setShow(false)
                                    }} className="cursor-pointer" size={14} color="gray" />
                            </div>
                        </div>

                        {/* only to show when hover with one by one animation*/}
                        <div className="flex-1 mt-6 rounded-xl shadow-gray-300 shadow-[0px_4px_8px_rgba(17,17,16,0.1),0px_8px_10px_rgba(17,17,16,0.1),0px_6px_16px_rgba(17,17,26,0.1)] ">

                            <motion.ul className="inset-0  w-full h-full rounded-xl opacity-100 flex flex-col divide-y  text-lg gap-9 border py-8"

                                variants={parentListVariant}
                                initial="initial"
                                onHoverStart={() => setisHover(true)}
                                onHoverEnd={() => setisHover(false)}
                                animate={isHover ? "onHover" : "exit"}
                                transition={{
                                    duration: 0.35,
                                    type: "spring",
                                    stiffness: 90,
                                }}
                            >

                                {list.map((x, i) => {
                                    return <motion.li
                                        variants={listVariant}
                                        key={i}
                                        className="flex  gap-2 items-center px-5 ">
                                        <x.Icon
                                            size={21}
                                            className="shadow-[2.0px_5.0px_5.0px_rgba(0,0,0,0.18)] rounded-full" />
                                        {x.text}
                                    </motion.li>
                                })}
                            </motion.ul>
                        </div>
                    </motion.div > : null}
            </AnimatePresence >
        }
    </>
}
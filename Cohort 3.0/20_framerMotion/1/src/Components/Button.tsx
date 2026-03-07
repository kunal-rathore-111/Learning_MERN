
import { motion } from "motion/react"

export default function ButtonComp() {
    return < div className=" flex  text-white text-xl perspective-[1000px] transform-3d" >

        <motion.button className=" relative bg-gray-700 group hover:cursor-pointer px-5 py-2  rounded-xl"
            transition={{
                duration: .3,
            }}
            whileTap={{
                transition: { duration: .1 },
                rotateX: 0, rotateY: 0
            }}

            whileHover={{
                rotateX: 30, rotateY: 30, translateZ: 70
            }}>
            Hi there
            <span className="absolute opacity-0 group-hover:opacity-100 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-0.5 blur-1 w-3/4 mx-auto"></span>
        </motion.button>

    </div >
}
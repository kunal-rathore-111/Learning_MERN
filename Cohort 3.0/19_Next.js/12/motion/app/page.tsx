"use client"

import { easeInOut, motion } from "motion/react";


export default function HomePage() {

  return <div className="m-30 flex flex-col gap-20">
    <section className=" flex flex-col gap-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0, }}
        transition={{ duration: 0.6 }}
      >
        <p>HOver the below stick to rotate</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{
          duration: 0.7,
          ease: easeInOut,
          delay: 0.6,
          rotate: { duration: 0.7, ease: easeInOut },
        }}
        whileHover={{
          rotate: 160,
        }}

        className="w-50"
      >
        <p>-------------------</p>
      </motion.div>
    </section>

    <section className=" flex flex-col gap-5">
      <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: 1.2 }}>
        Hover the below text to scale
      </motion.div>

      <motion.div initial={{ opacity: 0, y: -40, scale: 1 }} animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          opacity: { duration: .8, delay: 2, ease: easeInOut },
          y: { duration: .8, delay: 2, ease: easeInOut },
          scale: { duration: .6 }
        }}
        whileHover={{ scale: 1.2 }}
        className="w-30"
      >
        Hover me!!
      </motion.div>
    </section>

  </div>

}
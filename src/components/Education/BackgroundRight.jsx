import React from 'react'
import { motion } from "framer-motion";

const BackgroundRight = () => {
  return (
    <div className="relative  ">
    <motion.div
      initial={{ x: 50, y: -50, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="absolute top-3 right-30 bg-[#7B55EC] w-3 h-3 rounded-full"
    ></motion.div>

    <motion.div
      initial={{ x: 50, y: -50, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="absolute top-14 -right-1 bg-[#7DE0EA] w-11 h-11 rounded-xl rotate-10"
    ></motion.div>

    <motion.div
      initial={{ x: 50, y: -50, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="absolute top-38 -right-6 bg-[#0C96E2] w-5 h-5 rounded-full"
    ></motion.div>
  </div>
  )
}

export default BackgroundRight

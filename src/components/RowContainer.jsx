import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MdShoppingBasket } from 'react-icons/md'

const RowContainer = ({flag, data, scrollValue}) => {
    const rowContainer = useRef()
    useEffect(()=>{
        rowContainer.current.scrollLeft = scrollValue
    }, [scrollValue])
  return (
    <div ref={rowContainer} className={`w-full flex items-center my-12 gap-4 scroll-smooth ${ flag ? "overflow-x-scroll scrollbar-none": "overflow-x-hidden flex-wrap"}`}>
        { data && data.map((item, index)=>(
            <div  key={index} className="w-300 min-w-[300px] md:w-340 md:min-w-[340px] h-auto my-12 backdrop-blur-lg bg-cardOverlay rounded-lg p-2 shadow-md hover:drop-shadow-md flex flex-col items-center justify-between">
            <div className="w-full flex items-center justify-between">
                <motion.img whileHover={{scale: 1.2 }} src={item.imageURL} className="w-40 h-40 -mt-8" alt="food-pic" />
                <motion.div whileTap={{scale: 0.75}} className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md">
                    <MdShoppingBasket className="text-white text-xl" />
                </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end">
                <p className="text-textColor font-semibold text-base md:text-lg">{item.title}</p>
                <p className="mt-1 text-sm text-gray-500">{item.calories} Calories</p>
                <div className="flex items-center gap-8">
                    <p className="text-lg text-headingColor font-semibold"><span className="text-sm text-red-500">$</span> {item.price}</p>
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default RowContainer
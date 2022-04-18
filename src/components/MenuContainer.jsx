import React, { useState, useEffect } from 'react'
import { IoFastFood } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { categories } from '../utils/data'
import { useStateValue } from "../context/StateProvider";
import RowContainer from './RowContainer'

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");
  const [{ foodItems }, dispatch] = useStateValue();
 
  return (
    <section className="w-full my-6">
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
            Our Hot Dishes
          </p>
            
          <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
              { categories && categories.map((n, i) => (
                  <motion.div whileTap={{ scale: 0.6 }} key={i} onClick={()=> setFilter(n.urlParamName)} className={`group ${ filter === n.urlParamName ? "bg-cartNumBg": "bg-card"} w-24 min-w-[94px]  h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-red-600`}>
                  <div className={`w-10 h-10 ${ filter === n.urlParamName ? "bg-card": "bg-cartNumBg"} rounded-full  group-hover:bg-white flex items-center justify-center shadow-lg`}>
                      <IoFastFood className={`${ filter === n.urlParamName ? "text-textColor": "text-white"} group-hover:text-textColor text-lg`}/>
                  </div>
                  <p className={`text-sm ${ filter === n.urlParamName ? "text-white": "text-textColor"} group-hover:text-white`}>{n.name}</p>
              </motion.div>
              ))}
          </div>
          <div className="w-full">
                <RowContainer scrollValue={0} flag={false} data={foodItems?.filter((n)=>n.category === filter)} />
          </div>
        </div>
    </section>
  )
}

export default MenuContainer
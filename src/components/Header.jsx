import React from 'react'
import Logo from './img/logo.png'
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
        {/* desktop & tablet*/ }
        <div className="hidden md:flex w-full h-full items-center justify-between">
            <div className="flex items-center gap-2">
                <img src={Logo} alt="logo" className="w-10 object-cover" />
                <p className="text-headingColor text-xl font-bold">Foodie</p>
            </div>

            <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8">
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
            </ul>
            <div className="relative flex items-center justify-center">
                <MdShoppingCart className="text-textColor text-2xl ml-8 cursor-pointer" />
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
                    <p className="text-xs text-white font-semibold">2</p>
                </div>
            </div>
            </div>
        </div>

        {/* mobile*/ }
        <div className="flex md:hidden w-full "></div>
    </header>
  )
}

export default Header
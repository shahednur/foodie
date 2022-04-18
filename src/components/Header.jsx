import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { MdShoppingCart, MdAdd, MdLogout, MdSettings, MdSupervisedUserCircle } from "react-icons/md";
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user }, dispatch] = useStateValue();
    const [isMenu, setIsMenu] = useState(false);

    const login = async () => {
        try {
            if(!user){
                const { user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
                dispatch({
                    type: actionType.SET_USER,
                    user: providerData[0]
                });
                localStorage.setItem('user', JSON.stringify(providerData[0]));
            }else {
                setIsMenu(!isMenu);
            }
        } catch (error) {
            console.log(error);
        } 
    }

    const logout = () => {
        setIsMenu(!isMenu);
        try{
            if(user){
                firebaseAuth.signOut();
                dispatch({
                    type: actionType.SET_USER,
                    user: null
                });
                localStorage.removeItem('user');
            }
        }catch(error){
            console.log(error);
        }
    }
  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:p-4 md:px-16 bg-primary'>
        {/* desktop & tablet*/ }
        <div className="hidden md:flex w-full h-full items-center justify-between">
            <Link to={"/"} className="flex items-center gap-2 cursor-pointer">
                <img src={Logo} alt="logo" className="w-10 object-cover" />
                <p className="text-headingColor text-xl font-bold">Foodie</p>
            </Link>

            <div className="flex items-center gap-8">
            <motion.ul 
                initial={{opacity: 0, x:200}} 
                animate={{opacity: 1, x:0}}
                exit={{opacity: 0, x:200}}
                className="flex items-center gap-8"
            >
               <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"><Link to={"/"}>Home</Link></li>
               <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"><Link to={"/menu"}>Menu</Link></li>
               <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"><Link to={"/about"}>About</Link></li>
               <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"><Link to={"/services"}>Service</Link></li>
            </motion.ul>
            <div className="relative flex items-center justify-center">
                <MdShoppingCart className="text-textColor text-2xl ml-8 cursor-pointer" />
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
                    <p className="text-xs text-white font-semibold">2</p>
                </div>
            </div>

            <div className="relative flex items-center justify-center">
                <motion.img
                    whileTap={{ scale: 0.6 }} 
                    src={ user? user.photoURL : Avatar} 
                    alt="avatar" 
                    className="w-8 object-cover shadow-2xl cursor-pointer rounded-full" 
                    onClick={login}
                />
                { isMenu && (
                    <motion.div 
                    initial={{opacity: 0, scale: 0.6}} 
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.6}}
                    className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-9 right-0 px-2 py-2">
                    { user && user.email === "shahednurctg@gmail.com" && (
                        <>
                        <Link to={"/createItem"} onClick={()=> setIsMenu(!isMenu)}><p className="flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base">New Item <MdAdd/></p></Link>
                        <Link to={"/settings"}><p onClick={()=>setIsMenu(!isMenu)} className="flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base">Setting <MdSettings/></p></Link>
                        </>
                    )}
                    <Link to={"/profile"}><p onClick={()=>setIsMenu(!isMenu)} className="flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base">Profile <MdSupervisedUserCircle/></p></Link>
                    <p className="flex items-center justify-center bg-gray-200 px-4 py-2 gap-3 cursor-pointer hover:bg-slate-300 rounded-lg hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base" onClick={ logout }>Logout <MdLogout /></p>
                </motion.div>
                )}
            </div>
            </div>
        </div>

        {/* mobile*/ }
        <div className="flex items-center justify-between md:hidden w-full ">
            
            <div className="relative flex items-center">
                <MdShoppingCart className="text-textColor text-2xl cursor-pointer" />
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
                    <p className="text-xs text-white font-semibold">2</p>
                </div>
            </div>

            <Link to={"/"} className="flex items-center gap-2 cursor-pointer">
                <img src={Logo} alt="logo" className="w-10 object-cover" />
                <p className="text-headingColor text-xl font-bold">Foodie</p>
            </Link>

            <div className="relative flex items-center justify-center">
                <motion.img
                    whileTap={{ scale: 0.6 }} 
                    src={ user? user.photoURL : Avatar} 
                    alt="avatar" 
                    className="w-8 object-cover shadow-2xl cursor-pointer rounded-full" 
                    onClick={login}
                />
                { isMenu && (
                    <motion.div 
                    initial={{opacity: 0, scale: 0.6}} 
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.6}}
                    className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-9 right-0 px-2 py-2">
                    
                    <Link to={"/"} onClick={()=>setIsMenu(!isMenu)}><p className="flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base">Home </p></Link>
                    <Link to={"/menu"} onClick={()=>setIsMenu(!isMenu)}><p className="flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base">Menu </p></Link>
                    <Link to={"/about"} onClick={()=>setIsMenu(!isMenu)}><p className="flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base">About </p></Link>
                    <Link to={"/services"} onClick={()=>setIsMenu(!isMenu)}><p className="flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base">Service</p></Link>
                    { user && user.email === "shahednurctg@gmail.com" && (
                        <>
                        <Link to={"/createItem"} onClick={()=>setIsMenu(!isMenu)}><p className="flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base border-t border-gray-400">New Item <MdAdd/></p></Link>
                        <Link to={"/settings"} onClick={()=>setIsMenu(!isMenu)}><p className="flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base">Setting <MdSettings/></p></Link>
                        <Link to={"/profile"} onClick={()=>setIsMenu(!isMenu)}><p className="flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base">Profile <MdSupervisedUserCircle/></p></Link>
                        <p className="flex items-center justify-center bg-gray-200  px-4 py-2 gap-3 cursor-pointer hover:bg-slate-300 rounded-lg hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base" onClick={ logout }>Logout <MdLogout /></p>
                        </>
                    )}
                </motion.div>
                )}
            </div>
        </div>
    </header>
  )
}

export default Header
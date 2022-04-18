import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import { Header, MainContainer, CreateContainer, Profile, Settings, Menu, About, Services } from './components'

import { getAllFoodItems } from './utils/firebaseFunctions'
import { actionType } from './context/reducer'
import { useStateValue } from "./context/StateProvider";

function App() {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchFoodItems = async () => {
    await getAllFoodItems().then((data)=>{
      console.log(data)
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data
      })
    })
  }

  useEffect(() => {
    fetchFoodItems();
  } , [])
  return (
   <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
      <main className="mt-14 md:mt-20 p-8 md:px-16 md:py-4 w-full">
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
    </div>
    </AnimatePresence>
  );
}

export default App;

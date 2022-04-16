import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import { Header, MainContainer, CreateContainer, Profile, Settings } from './components'

function App() {
  return (
   <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
      <main className="mt-24 p-8 w-full">
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
    </AnimatePresence>
  );
}

export default App;

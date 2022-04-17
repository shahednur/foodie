import React from 'react'
import HomeContainer from './HomeContainer'

const MainContainer = () => {
  return (
    <div className="w-full h-[calc(100%-99px)] flex flex-col items-center justify-center">
      <HomeContainer />
    </div>
  )
}

export default MainContainer
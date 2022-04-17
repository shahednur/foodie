import React from 'react'

const MainContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="flex-1 py-2 flex flex-col items-start justify-center md:items-center">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
        </div> 
      </div>
      <div className="flex-1 py-2"> Fish</div>
    </div>
  )
}

export default MainContainer
import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
const HomeContainer = () => {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-auto">
      <div className="flex-1 py-2 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img src={Delivery} alt="delivery" className="w-full h-full object-cover" />
          </div>
        </div> 
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "} <span className="text-orange-600 text-[3rem] lg:text-[4.5rem]">Your City</span>
        </p>
        <p className="text-base text-textColor md:w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquam libero quae excepturi eaque! Explicabo quod obcaecati, deserunt dolor adipisci laboriosam! Officiis maiores consequatur nisi tenetur fugit omnis illum rem!</p>
        <button type="button" className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">Order Now</button>
      </div>
      <div className="flex-1 py-2 flex items-center">
        <img src={HeroBg} alt="heroBg" className="lg:h-570 h-370 w-full lg:w-auto ml-auto" />
      </div>
    </section>
  )
}

export default HomeContainer
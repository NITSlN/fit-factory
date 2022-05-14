import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

import Parallax from 'react-rellax'
function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between md:space-x-[8rem] bg-[#eef0f4] px-[2rem] pt-40 lg:pt-48 lg:pb-36 pb-24">
      <div className="lg:w-1/2 w-full lg:justify-self-start justify-self-center">
        <Parallax speed={-4}>
        <div className="animate-rotate">
            <h2 className='font-marker -mb-2 text-center md:text-4xl xl:text-6xl text-[#8ea5a0]'> SANDRA LYONS</h2>
        
          
          <img
            className="w-full  lg:h-auto h-[400px] object-top object-cover rounded-lg"
            src="https://assets.website-files.com/5e80894f63c557e083ed96b4/5e80a6e90c4ef4bcb4fd3071_Rectangle%20439.png"
            alt=""
          />
        </div>
        </Parallax>
      </div>
      <div className="lg:w-1/2 animate-delay-200 w-full pt-12 lg:pt-0 justify-self-end flex flex-col justify-center text-[#081158] text-blue-900">
        <h1 className="text-left  text-lg mb-8">HI I&apos;M SANDRA LYONS</h1>
        <h1 className="md:text-7xl text-xl mb-12 text-[#081158] font-medium md:leading-[4.8rem]">
          Your go to online fitness trainer and nutritionist.
        </h1>
        <p className="w-[80%] md:leading-loose text-xl text-blue-900 mb-8">
          After getting a bachelors in nutrition and fitness training I started
          working with people all around and changing their lives forever.
        </p>
        <div className="bg-[#081158] text-white cursor-pointer  hover:bg-blue-900  px-4 py-4 w-[220px] rounded flex items-center justify-center">
          <MdKeyboardArrowRight className="mr-2 scale-150" /> ONLINE COACHING
        </div>
      </div>
    </div>
  )
}

export default Hero

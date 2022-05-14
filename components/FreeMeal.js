import React from 'react'
import Image from 'next/image'
import { MdKeyboardArrowRight } from 'react-icons/md'

import Button from './Button'
function FreeMeal() {
  return (
    <div
      className="relative w-full object-cover"
      style={{
        backgroundImage:
          'url(https://assets.website-files.com/5e80894f63c557e083ed96b4/5e8318706203833a1bd11fad_logan-weaver-pD5kSwtNgMc-unsplash-p-2000.jpeg)',
      }}
    >
      <div className="w-full h-full text-center md:px-12 px-3 py-24 flex-center">
        <div className="rounded-xl  w-full mx-auto md:px-20 px-8 py-12 md:py-16 bg-[#cfddee]">
          <div className="w-full ">
            <h2 className="lg:text-[70px] md:text-5xl text-2xl mb-10 font-semibold text-[#081158]">
              Get our free meal plan
            </h2>
            <div className="flex-center">
              <p className="text-md md:max-w-[800px] md:text-xl leading-7 tracking-wide mb-6 md:mb-12">
                Signup to our newsletter to get a free 30 day meal plan. You
                will receive all guidance on what to eat, how to cook and how
                much to eat.
              </p>
            </div>
              <div className='md:flex-row flex flex-col gap-2 items-center'>
                <input type="text" className='meal-input' placeholder='Full Name' />
                <input type="email" className='meal-input' placeholder='Email' />
                {/* Button Sign Up */}
                <div className="w-full">
                  <button className="btn-blue w-full md:px-0 py-6">
                    <MdKeyboardArrowRight className="mr-2 scale-150" /> Sign Up
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FreeMeal

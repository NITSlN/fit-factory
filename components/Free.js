import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Button from './Button'
import Card from './Card'
function Free() {
  return (
    <div className="bg-[#081158] py-40">
      <div className="text-white px-8">
        <h2 className="md:text-[90px] text-5xl max-w-[900px] mb-12">
          Free home workouts and fitness plans
        </h2>
        <p className="text-2xl max-w-[650px] font-thin">
          I’ve created these premium fitness classes for everyone starting from
          beginner to advanced level with an in depth FAQ.
        </p>
        <button className="mt-12 cursor-pointer px-12 py-6 duration-300 text-[#081158] font-normal bg-white text-white text-xl  rounded flex items-center">
          <MdKeyboardArrowRight className="mr-6 scale-150 opacity-[0.75]" />{' '}
          VIEW ALL
        </button>
      </div>
        <div class="grid md:grid-cols-3 gap-12 mt-24 px-8">
          <Card src={'https://assets.website-files.com/5e8303dd097a90ffd20e6b2f/5e831e3a9e9cc3b8eccc7caf_angelos-michalopoulos-S3Rs0DcvvK0-unsplash-p-500.jpeg'}/>
          <Card src={'https://assets.website-files.com/5e8303dd097a90ffd20e6b2f/5e831e7a9a30c575281c9d8d_logan-weaver-BvXh8e5M8YM-unsplash-p-800.jpeg'}/>
          <Card src={'https://assets.website-files.com/5e8303dd097a90ffd20e6b2f/5e831e2642594a3e47696a07_guillaume-bolduc-cfmBbDcCAQo-unsplash-p-500.jpeg'}/>
        </div>
    </div>
  )
}

export default Free

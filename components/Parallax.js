import Image from 'next/image'
import React, { useEffect } from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'

function Parallax() {
    
    
  return (
    <div className='relative'>
        <ParallaxBanner
  layers={[
    {
      image: 'https://assets.website-files.com/5e80894f63c557e083ed96b4/5e80ac45d802d6068e8987b8_logan-weaver-WJUrYr5KqSw-unsplash%202.png',
      speed: -10,
      scale:['1','1.6']
    },
  ]}
  className='object-cover h-[500px] w-full'
  style={{ aspectRatio: '2 / 1',  }}
>

      <div className='absolute w-full text-center h-full flex items-center justify-center'>
      <h1 className=' text-2xl md:text-7xl text-gray-200 font-marker'>SWEAT. GAIN. DO.</h1>
      </div>
</ParallaxBanner>
    </div>
  )
}

export default Parallax
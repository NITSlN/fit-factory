import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'


const features = [
  {
    id:'1',
    src:"https://assets.website-files.com/5e80894f63c557e083ed96b4/5e80a6e90c4ef4bcb4fd3071_Rectangle%20439.png",
    heading:'Learn to live a healthy life with fitness',
    content:'Changing your lifestyle with a fast paced life may seem hard or impossible, but with small steps each week you can achieve your dream physique and live a healthier life.'
  },
  {
    id:'2',
    src:"https://assets.website-files.com/5e80894f63c557e083ed96b4/5e8318ac54f5dfdf7b9fe428_logan-weaver-24LpwagvuDY-unsplash.jpg",
    heading:'Understand how to do excercises properly',
    content:"Just going to the gym and lifting weights won't make you healthy, after all it may even cause some harm to your body. We teach proper exercise techniques"
  },
  {
    id:'3',
    src:"https://assets.website-files.com/5e80894f63c557e083ed96b4/5e8318b4e893cdf8c256b249_logan-weaver-Oyw8t2UTUWQ-unsplash-p-500.jpeg",
    heading:'Track your progress weekly',
    content:"We're tracking your goal weight with body fat measures, weight and general feeling. You may have the same body weight but feel 10x better."
  },
  {
    id:'4',
    src:"https://assets.website-files.com/5e80894f63c557e083ed96b4/5e80a6eadad44d80ed2be7b4_Rectangle%20441.png",
    heading:'A plan made just for you',
    content:"Everyone is different, and we know it. That's why all of our clients get a programme specific just for their lifestyle and body tipe. This give the best possible results."
  }
]
function Feature() {
  return (
    <div className="py-24 flex justify-center">
      <div className="  grid text-center max-w-[1150px] gap-y-32 gap-x-12 items-center w-[95%] md:grid-cols-2 grid-cols-1">
        <div className=" flex flex-col items-center md:col-span-2">
          <h1 className="md:text-6xl text-3xl mb-12 text-[#081158] max-w-[800px] font-medium">
            The journey to a healthier body starts right now
          </h1>
          <div className="bg-[#081158] text-white cursor-pointer  hover:bg-blue-900  px-4 py-4 w-[220px] rounded flex items-center justify-center">
            <MdKeyboardArrowRight className="mr-2 scale-150" /> ONLINE COACHING
          </div>
        </div>
        
        {
          features.map(({id, src,heading,content})=>{
            return (
              <div key={id} className="flex relative flex-col items-center ">
          <div className="max-w-sm  flex after flex-col">
            <img
              className="w-full object-cover   rounded-lg h-[300px] w-[300px] mb-8 self-center"
              src={src}
              alt=""
            />
            <h1 className="text-2xl mb-4 text-[#081158] text-[30px] font-[500] ">
             {heading}
            </h1>
            <p className="leading-loose text-[16px] text-blue-900 mb-8 font-[400]">
              {content}
            </p>
          </div>
        </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Feature

import React from 'react'

function Card({src, time,heading}) {

  return (
      <div className="min-w-96 rounded-lg shadow-lg scale  cursor-pointer hover:-translate-y-2 duration-300 shadow-lg hover:shadow-blue-900 bg-white">
        <div className='overflow-hidden h-[400px]'>
        <a href="#!">
          <img
            className="rounded-t-lg w-full h-full  object-cover "
            src={src}
            alt=""
          />
        </a>
        </div>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2 uppercase">{time}</h5>
          <p className="text-[#081158] text-2xl font-medium mb-4">
            {heading}
          </p>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 font-light  uppercase rounded shadow-md hover:shadow-lg hover:ring-1 active:bg-blue-800 ring-[#081158] transition duration-150 ease-in-out"
          >
             Train Now
          </button>
        </div>
      </div>
  )
}

export default Card

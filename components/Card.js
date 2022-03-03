import React from 'react'

function Card({src}) {
  return (
    <div className="flex justify-center">
    
      <div className="rounded-lg shadow-lg scale  cursor-pointer hover:-translate-y-2 duration-300 shadow-lg hover:shadow-blue-900 bg-white">
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
          <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
          <p className="text-gray-700 text-base mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
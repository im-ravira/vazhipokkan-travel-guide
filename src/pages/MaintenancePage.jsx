import React from 'react'
import { Link } from 'react-router-dom'
import { TbFileSad } from "react-icons/tb";

const MaintenancePage = () => {
  return (
    <div>
       <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex flex-col gap-8 md:p-12  p-8 text-center">
        <h1 className="flex felx-row gap-1 md:text-3xl text-xl items-center justify-center font-bold text-red-500 mb-4"><TbFileSad size={48}/>We'll Be Back Soon!</h1>
        <div><p className="text-gray-700 leading-6 text-justify md:text-base text-sm mb-6 lg:mx-64 md:mx-24 mx-3">
          Our page is currently undergoing maintenance. We’re working hard to bring <br className='hidden lg:block'/>you the best experience.
        
          Please check back later. Thank you for your patience!
        </p></div>
        <div className="flex justify-center">
          <Link to="/" className="bg-orange-500 font-medium text-white md:text-bas text-sm py-2 px-4 rounded hover:bg-orange-600 transition duration-200">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MaintenancePage

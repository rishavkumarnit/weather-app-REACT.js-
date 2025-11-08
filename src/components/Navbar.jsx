import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed font-semibold flex bg-gray-600 px-10 h-10 py-2 w-full items-center justify-between'>
        <span >Weather now</span> 
        <span className='flex gap-10'>
            <span className=' hover:text-gray-800 hover:cursor-pointer'>Home</span>
            <span className=' hover:text-gray-800 hover:cursor-pointer'>About</span>
        </span>
    </div>
  )
}

export default Navbar
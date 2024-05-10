import React from 'react'

const Suggestion = () => {
  return (
    <div className='flex justify-between items-center'>
    <div className='flex items-center'>
        <img className='w-9 h-9 rounded-full' 
        src="https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=600" 
        alt="" />
        <div className='ml-2'>
            <p className='text-sm font-semibold cursor-pointer'>username</p>
            <p className='text-sm font-semibold opacity-70m'>Follows You</p>
        </div>
    </div>
    <p className='text-blue-700 text-sm font-semibold cursor-pointer'>Follow</p>
    </div>
  )
}

export default Suggestion
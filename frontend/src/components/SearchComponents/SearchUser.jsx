import React from 'react'

const SearchUser = () => {
  return (
    <div className='py-2 cursor-pointer'>
        <div className='flex items-center'>
            <img className='w-10 h-10 rounded-full'
            src="https://images.pexels.com/photos/424134/pexels-photo-424134.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="" />

        <div className='ml-3'>
            <p>Full name</p>
            <p className='opacity-70'>Username</p>
        </div>
        </div>
    </div>
  )
}

export default SearchUser
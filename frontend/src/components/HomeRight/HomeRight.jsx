import React from 'react'
import Suggestion from './Suggestion'

const HomeRight = () => {
  return (
    <div className=''>
      <div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <div>
              <img className='w-12 h-12 rounded-full' 
              src="https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="" />
            </div>
            <div className='ml-3'>
              <p>Full Name</p>
              <p className='opacity-70'>Username</p>
            </div>
          </div>
          <div>
            <p className='text-blue-700 font-semibold cursor-pointer'>Switch</p>
          </div>

        </div>
          <div className='space-y-5 mt-10'>
            {[1,1,1].map((item)=><Suggestion />)}
          </div>

      </div>
    </div>
  )
}

export default HomeRight
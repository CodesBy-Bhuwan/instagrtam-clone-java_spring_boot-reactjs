import React from 'react'
import StoriesCircle from '../../components/StoriesComponents/StoriesCircle'
import HomeRight from '../../components/HomeRight/HomeRight'

const HomePage = () => {
  return (
    <div>
      <div className='mt-10 flex w-[100%] justify-center'>
      <div className='w-[44%] px-10'>
        <div className='storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full'>
          {[1,2,3].map((item)=> (<StoriesCircle/>))} 
          </div>
          <div>
            post
            {/* post */}
          </div>
      </div>
      <div>
        {/* Otherinfo in the Right hand side */}
        homeiinfo
        <HomeRight />
      </div>
      </div>
    </div>
  )
}

export default HomePage
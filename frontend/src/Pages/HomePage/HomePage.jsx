import React from 'react'
import StoriesCircle from '../../components/StoriesComponents/StoriesCircle'
import HomeRight from '../../components/HomeRight/HomeRight'
import Post from '../../components/Post/Post'
import { useDisclosure } from "@chakra-ui/react";

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <div className='mt-10 flex w-[100%] justify-center'>
      <div className='w-[44%] px-10'>
        <div className='storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full'>
          {[1,2,3].map((item)=> (<StoriesCircle/>))} 
          </div>
          <div className='space-y-10 w-full mt-10'>
            {[1,2,3].map((item) => <Post/>)}
            </div>
      </div>
      <div className='w-[35%]'>
        {/* Otherinfo in the Right hand side */}
        <HomeRight />
      </div>
      </div>
      
    </div>
  )
}

export default HomePage
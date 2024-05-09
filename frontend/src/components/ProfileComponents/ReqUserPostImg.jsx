import React from 'react'
import { FaComment } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import './ReqUserPostImg.css'

const ReqUserPostImg = () => {
  return (
    <div className='p-2'>
        <div className='post w-60 h-60'>
            <img className='cursor-pointer' src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div >
                        <AiFillHeart /> <span>10</span>
                    </div>
                    <div><FaComment/> <span>30</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReqUserPostImg
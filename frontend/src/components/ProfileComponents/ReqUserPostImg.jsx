import React from 'react'
import { FaComment } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import './ReqUserPostImg.css'

const ReqUserPostImg = () => {
  return (
    <div className='p-2'>
        <div className='post w-60 h-60'>
            <img className='cursor-pointer' src="data:image/jpeg;base64,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" alt="" />
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
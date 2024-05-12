import React from 'react'
import { useNavigate } from 'react-router-dom'

const StoriesCircle = () => {
  const navigate=useNavigate()
  const handleNavigate=()=>{

    navigate("/story")

  }
  return (
    <div onClick={handleNavigate} className='cursor-pointer flex flex-col items-center'>
        <img className='w-16 h-16 rounded-full' 
        src="https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=600" 
        alt="" />
        <p >Username</p>
    </div>
  )
}

export default StoriesCircle
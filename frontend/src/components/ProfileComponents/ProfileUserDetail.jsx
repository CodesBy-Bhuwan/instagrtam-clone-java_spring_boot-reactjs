import React from 'react';
import { TbCircleDashed } from "react-icons/tb";


const ProfileUserDetail = () => {
  return (
    <div className='py-10 w-full'>
      <div className='flex items-center'>
        <div className='w-[15%]'>
          <img className='w-32 h-32 rounded-full' 
          src="https://images.pexels.com/photos/906052/pexels-photo-906052.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="" />
        </div>

        <div className='space-y-5'>
          <div className='flex space-x-10 items-center'>
            <p>username</p>
            <button>Edit Profile</button>
            <TbCircleDashed />
          </div>

          <div className='flex space-x-10'>
            <div>
              <span className='font-semibold mr-2'>10</span>
              <span>posts</span>
            </div>
            <div>
              <span className='font-semibold mr-2'>5</span>
              <span>follower</span>
            </div>
            <div>
              <span className='font-semibold mr-2'>7</span>
              <span>following</span>
            </div>
          </div>
          <div>
              <p className='font-semibold'>Full Name</p>
              <p className='font-thin text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste eum dignissimos dolore vel pariatur explicabo cupiditate exercitationem </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileUserDetail
import React from 'react'
import {Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, } from '@chakra-ui/react'
// import Post from '../Post/Post'
import CommentPart from './CommentPart';
import { BsBookmark, BsEmojiSmile, BsThreeDots, BsBookmarkFill } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri"
import "./CommentModal.css"

const CommentModal = ({onClose, isOpen, isSaved, isPostLiked, handlePostLike, handleSavePost}) => {
  return (
    <div>
          <Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>

          {/* <ModalCloseButton /> */}
          <ModalBody>
          <div className='flex h-[75vh]'>
            <div className='w-[45%] flex flex-col justify-center'>
              <img 
              className='max-h-full w-full' 
              src="https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="" />
            </div>
            <div className='w-[55%] pl-10 relative'>
              <div className='flex justify-between items-center py-5'>
              <div className='flex items-center'>
                <div>
                  <img className='w-9 h-9 rounded-full' 
                  src="https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="" />
                </div>
                </div>
                </div>
                <div className='ml-2'>
                  <p>username</p>
              <BsThreeDots />
              </div>
              <hr />
              <div className='comment'>
                {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(()=>
                (<CommentPart/>
                ))}
              </div>
              {/* LIke Comment Share */}
              <div className='absolute bottom-0 w-[90%]'>
              <div className="flex justify-between items-center w-full py-4">
          <div className="flex items-center space-x-2">
            {isPostLiked ? (
              <AiFillHeart
                className="text-2xl hover:opacity-90 cursor-pointer text-red-700"
                onClick={handlePostLike}
              />
            ) : (
              <AiOutlineHeart
                className="text-2xl hover:opacity-50 cursor-pointer"
                onClick={handlePostLike}
              />
            )}
            {/* For Like and Unlike post if liked colored red*/}
            {/* When we click comment button new transition has to be occured */}
            <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
            {/* we will use charka Ui  */}
            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
          </div>
          <div className="cursor-pointer">
            {isSaved ? (
              <BsBookmarkFill
                onClick={handleSavePost}
                className="text-xl hover:opacity-50 cursor-pointer"
              />
            ) : (
              <BsBookmark
                onClick={handleSavePost}
                className="text-xl hover:opacity-50 cursor-pointer"
              />
            )}
            {/* If post save fill else not */}
          {/* </div> */}
        </div>
              {/*  <Post></Post>  */}
              </div>
              <div className='w-full py-2'>
                <p>10 likes</p>
                <p className='opacity-50 text-sm'>1 day ago</p>
              </div>

              {/* <div className='border border-t w-full'> */}
                <div className='flex w-full items-center'>
                  <BsEmojiSmile/>
                  <input 
                  className='commonInput' 
                  type="text" 
                  placeholder='Add a comment' />
                </div>
                </div>
              {/* </div> */}
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CommentModal
import React, { useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import { BsBookmark, BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsBookmarkFill } from "react-icons/bs";
import '../Post/Post.css'
const Post = () => {
  const [showDropDown, setshowDropDown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSavePost = () => {
    setIsSaved(!isSaved);
  };
  const handlePostLike = () => {
    setIsPostLiked(!isPostLiked);
  };
  const handleClick = () => {
    setshowDropDown(!showDropDown);
  };

  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="flex justify-between items-center w-full py-4 px-5">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          {/* Username and locaiton will stay on side of profile */}
          <div className="">
            <p className="font-semibold text-sm">username</p>
            <p className="font-thin text-sm">location</p>
          </div>

          <div className="dropdown">
            {/* We can add multiple options inside this threedots */}
            <BsThreeDots className="" onClick={handleClick} />
            <div className="dropdown-content">
              {showDropDown && (
                <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            className="w-full"
            src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="flex justify-between items-center w-full px-5 py-4">
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
          </div>
        </div>
        <div className="w-full py-2 px-5">
          <p>10 likes</p>
          <p className="opacity-50 py-2 cursor-pointer">view all comments</p>
        </div>
        <div className="border border-t w-full">
          <div className="flex w-full items-center px-5">
            <BsEmojiSmile />
            {/* This will add emote sign within comment box */}
            <input
              className="commentInput"
              type="text"
              placeholder="Add a Comment..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

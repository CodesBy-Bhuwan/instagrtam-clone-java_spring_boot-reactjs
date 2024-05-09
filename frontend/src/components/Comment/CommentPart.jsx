import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const CommentPart = () => {
  const [isCommetnLike, setIsCommentLike] = useState(false);
  const handleLikeComment = () => {
    setIsCommentLike(!isCommetnLike);
  };
  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center">
          <div>
            <img
              className="w-9 h-9 rounded-full"
              src="https://images.pexels.com/photos/133472/pexels-photo-133472.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p>
              <span className="font-semibold">username1</span>
              <span className="ml-2">comment by username1</span>
            </p>
            <div className="flex items-center space-x-3 text-xs opacity-60 pt-2">
              <span>1 min ago</span>
              <span>23 likes</span>
            </div>
          </div>
        </div>
        {isCommetnLike ? (
          <AiFillHeart
            onClick={handleLikeComment}
            className="text-xs hover:opacity-50 cursor-pointer text-red-700"
          />
        ) : (
          <AiOutlineHeart className="text-xs hover:opacity-50 cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default CommentPart;

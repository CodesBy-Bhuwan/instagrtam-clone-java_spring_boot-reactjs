import React from 'react'
import StoryViewer from '../../components/StoriesComponents/StoryViewer'

const Story = () => {
    const story =[
        {
            image:"https://images.pexels.com/photos/21905722/pexels-photo-21905722/free-photo-of-a-man-in-a-helmet-and-backpack-standing-on-top-of-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            // image:"<CreatePostModal onClose={onClose} isOpen={isOpen) />"
        },{
            image:"https://images.pexels.com/photos/16476686/pexels-photo-16476686/free-photo-of-utility-pole-and-building-behind.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
    ]


  return (
    <div>
        <StoryViewer stories={story}/>
    </div>
  )
}

export default Story
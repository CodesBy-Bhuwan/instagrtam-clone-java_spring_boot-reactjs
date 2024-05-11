import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Progressbar from './Progressbar'
// import { styled } from '@chakra-ui/react'

const StoryViewerContainer=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    background-color:black;
`

const StoryImage=styled.img`
    max-height:90vh;
    object-fit:contain;
`
const StoryViewer = ({stories}) => {
    const [currentStoryIndex,setCurrentStoryIndex] = useState(0);
    const [activeIndex,setActiveIndex] = useState(0);

    const handleNextStory=()=>{
        if(currentStoryIndex<stories.length-1){
            setCurrentStoryIndex(currentStoryIndex+1)
            setActiveIndex(activeIndex+1);
        }
        else if (currentStoryIndex===stories.length-1){
            setCurrentStoryIndex(0);
            setActiveIndex(0)
        }
    }
    useEffect(()=>{        
        const interval=setInterval(()=>{handleNextStory()},2000)
        // This nextstory-time and duration it has to be equal 
        // it's just a display time 
        return()=>clearInterval(interval);

    },[currentStoryIndex])
  return (
    <div className='relative w-full'>
        <StoryViewerContainer>
            <StoryImage  src={stories?.[currentStoryIndex].image}></StoryImage>
            <div className='absolute top-0 flex w-full'>
                {stories.map((item, index)=><Progressbar key={index} duration={2000} index={index} activeIndex={activeIndex} />
                )}
            </div>
        </StoryViewerContainer>
    </div>
  )
}

export default StoryViewer
import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useStatStyles,
  } from '@chakra-ui/react'
import { FaPhotoVideo } from 'react-icons/fa'

//   From this location we can post the content
const CreatePostModal = ( { 
    isOpen, onClose 
} ) => {
    const { isDragOver, setIsDragOVer} = useState(false);
    const [file,setFile]=useState();


    const handleDrop =(event)=>{
        event.preventDefault();
        const droppedFile=event.dataTransfer.file[0];

        // after drop must verify if video or image
        if ((droppedFile.type.startswitch("image/") || (droppedFile.type.startswitch("video/") )){
            setFile(droppedFile)

        }
    }

    const handleDragOver =(event)=>{
        event.preventDefault();
        event.dataTransfer.dropEffect="copy";
        setIsDragOVer(true)
    }

    const handleDragLeave =() =>{
        setIsDragOVer(false);
    }
    const handleonChange=(e)=>{
const file=e.target.file[0];
if(file&&file.type.startswitch("image/*") || file.type.startswitch("video/*") ){
    setFile(file);

}
else{
    setFile(null);
    alert("Please select the image or video")
}

    }
  return (
    <div>
        
      <Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
            <div className='flex justify-between py-1 items-center'>
                <p>Create Post</p>
                <Button variant={"ghost"} size="sm" colorScheme={"blue"} >
                    Share
                </Button>

            </div>
            <hr />
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <div>
                <div>
                    <div onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        className='drag-drop h-full'
                        >
                        <div>
                            {/* Drag and Paste Content to post */}
                            <FaPhotoVideo className='text-3xl' />
                            <p>Drag Photos or Videos Here</p>
                        </div>
                        <label htmlFor="file-upload" className='custom-file-upload'>Select from local device</label>
                        {/* This will allow if the content is acceptable or not */}
                        <input type="text" id='file-upload' accept='image/*, video/*' onChange={handleonChange} />
                    </div>
                </div>
            </div>
          </ModalBody>

        </ModalContent>
      </Modal>
    </div>
  )
}

export default CreatePostModal
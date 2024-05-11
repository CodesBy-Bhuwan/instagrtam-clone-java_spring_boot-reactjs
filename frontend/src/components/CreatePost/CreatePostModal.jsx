import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { FaPhotoVideo } from "react-icons/fa";
import { GrEmoji } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import "./CreatePostModal.css";

//   From this location we can post the content
const CreatePostModal = ({ isOpen, onClose }) => {
  const [ isDragOver, setIsDragOver ] = useState(false);
  const [file, setFile] = useState();
  const [caption, setCaption]=useState();

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.file[0];

    // after drop must verify if video or image
    if (
      droppedFile.type.startsWith("image/") ||
      droppedFile.type.startsWith("video/")
    ) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };
  const handleonChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type.startswith("image/*") || file.type.startswith("video/*"))
    ) {
      setFile(file);
    } else {
      setFile(null);
      alert("Please select the image or video");
    }
  };
  const handleCaptionChange=(e)=>{
    setCaption(e.target.value)
  }


  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className="flex justify-between py-1 px-10 items-center">
            <p>Create Post</p>
            <Button className="" variant={"ghost"} size="sm" colorScheme={"blue"}>
              Share
            </Button>
          </div>
          <hr />
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <div className="h-[70vh] justify-between pb-5 flex">
              <div className="w-[50%]">
                {!file && <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className="drag-drop h-full"
                >
                  <div>
                    {/* Drag and Paste Content to post */}
                    <FaPhotoVideo className="text-3xl" />
                    <p>Drag Photos or Videos Here</p>
                  </div>
                  <label htmlFor="file-upload" className="custom-file-upload">
                    Select from local device
                  </label>
                  {/* This will allow if the content is acceptable or not */}
                  <input
                    className="fileInput"
                    type="file"
                    id="file-upload"
                    accept="image/*, video/*"
                    onChange={handleonChange}
                  />
                </div> }

                {file && <img className="max-h-full" src={URL.createobjectURL(file)} alt="" />}

                </div>
                <div className="w-[1px] border-2 h-full"></div>
                <div className="w-[50%]">
                    <div></div>
                    <div className="flex items-center px-2">
                        <img className="w-7 h-7 rounded-full"
                        src="https://images.pexels.com/photos/4482677/pexels-photo-4482677.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="" />
                    <p className="font-semibold ml-4">username</p>
                    </div>
                    {/* Area for Captions */}
                    <div className="px-2">
                        <textarea 
                        placeholder="Write a caption" 
                        className="captionInput" 
                        name="caption" 
                        rows="8"
                        onChange={handleCaptionChange}
                        ></textarea>
                    </div>
                    <div className="flex justify-between px-2">
                        <GrEmoji />
                        <p className="opacity-70">{caption?.length} /2,200</p>
                    </div>
                    <hr />
                    <div className="p-2 flex justify-between items-center " >
                        <input className="locationInput" type="text" placeholder="location" name="location"/>
                        <GoLocation />
                        <hr />
                    </div>
                </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreatePostModal;

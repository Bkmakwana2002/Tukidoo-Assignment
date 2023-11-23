import React from 'react';
import richa from '../images/richa.webp';
import teach from '../images/teach.jpg';
import { GiSoundWaves } from 'react-icons/gi';
import { BsCameraVideo } from "react-icons/bs";
import { SlMicrophone } from "react-icons/sl";
import { FaRegShareSquare } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";
// import ReactPlayer from 'react-player'
// import videoURL from '../video/video.mp4'

const DashBoardContent = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around gap-48 mt-8">
        <div className="flex-col relative">
          <div className="mb-6">
            {/* Image 1 */}
            {/* <div className="relative scale-120">
              <img
                src={richa}
                alt="Richa"
                className="w-40 h-40 object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 p-2 text-black bg-gray-200 rounded-r-full">
                <p className="font-bold text-xs">Ridha</p>
              </div>
            </div> */}
            <div className="relative scale-120">
              <img
                src={richa}
                alt="Richa"
                className="w-40 h-40 object-cover rounded-2xl"
              />
              <div className="absolute top-2 right-1 px-2 py-1 text-xs text-gray-700 bg-white rounded-full">
                😊 + 
              </div>
              <div className="absolute bottom-0 left-0 p-2 text-black bg-gray-200 rounded-r-full">
                <p className="font-bold text-xs">Ridha</p>
              </div>
            </div>
          </div>
          <div className="relative scale-120">
            <GiSoundWaves className="absolute top-1 left-2 text-2xl text-gray-700 " />
            <img
              src={teach}
              alt="Ms. Kaur"
              className="w-40 h-40 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 p-2 text-black bg-gray-200 rounded-r-full">
              <p className="font-bold text-xs">Ms. Kaur</p>
            </div>
          </div>
          <div className='flex-col align-middle'>
            <div className='flex gap-4 mt-5 justify-center'>
              <span>
                <BsCameraVideo className='bg-gray-200 w-10 h-10 p-2 rounded-xl' />
                <p className='text-xs font-bold mt-1'>Cam</p>
              </span>
              <span>
                <SlMicrophone className='bg-gray-200 w-10 h-10 p-2 rounded-xl' />
                <p className='text-xs font-bold mt-1'>Mic</p>
              </span>
              <span>
                <FaRegShareSquare className='bg-gray-200 w-10 h-10 p-2 rounded-xl' />
                <p className='text-xs font-bold mt-1'>Share</p>
              </span>
            </div>
            <div className='flex mr-14 gap-4 mt-5 justify-center'>
              <span >
                <IoChatbubbleEllipsesOutline className='bg-gray-200 w-10 h-10 p-2 rounded-xl' />
                <p className='text-xs font-bold mt-1'>Chat</p>
              </span>
              <span>
                <IoMdExit className='bg-[#01869f] text-white w-10 h-10 p-2 rounded-xl' />
                <p className='text-xs font-bold mt-1'>Leave</p>
              </span>
            </div>
          </div>
        </div>
        <div>
          <iframe
            width="900"
            height="500"
            src="https://www.youtube.com/embed/njX2bu-_Vw4?si=sWx342UyhSuF85Fd"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          {/* <ReactPlayer url={videoURL} controls={true} width="900px"
            height="450px" volume={null} /> */}
        </div>
      </div>
    </div>
  );
};

export default DashBoardContent;

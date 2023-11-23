import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { SiGoogleclassroom } from "react-icons/si";
import { FaChalkboard } from "react-icons/fa";
import { RxVideo } from "react-icons/rx";
import { RiSlideshowLine } from "react-icons/ri";
import { IoNewspaperOutline } from "react-icons/io5";
import { LiaFileVideo } from "react-icons/lia";


const Navbar = () => {
    return (
        <>
            <div className="bg-white flex items-center justify-between p-4">
                <div className="flex items-center">
                    <div className="text-gray-500 mr-4 bg-gray-300 rounded-xl p-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-2xl font-extrabold">Basic Mathematics 101</h1>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="mr-4 flex align-middle items-center gap-2">
                        <FaPhoneAlt className='bg-blue-600 p-2 w-8 h-8 rounded-full text-white' />
                        <p className='font-bold'>Call Teacher</p>
                    </div>
                    <div className="mr-4 flex align-middle items-center gap-2">
                        <IoMdPerson className='bg-orange-400 p-2 w-8 h-8 rounded-full text-white' />
                        <p className='font-bold'>Support</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-start gap-x-20 mt-4 bg-gray-200 px-4 py-1 rounded-full'>
                <div className='flex ml-6 items-center justify-center gap-2'>
                <SiGoogleclassroom className='w-5 h-5 text-gray-500'/>
                    <p className='text-gray-500'>Classroom</p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                <FaChalkboard className='w-5 h-5 text-gray-500'/>
                    <p className='text-gray-500'>Whiteboard</p>
                </div>
                <div className='flex items-center justify-center gap-2 bg-white rounded-full p-3 px-10'>
                <RxVideo className='w-5 h-5'/>
                    <p className='font-bold'>Videos</p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                <RiSlideshowLine className='w-5 h-5 text-gray-500'/>
                    <p className='text-gray-500'>Slide Show</p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                <IoNewspaperOutline className='w-5 h-5 text-gray-500'/>
                    <p className='text-gray-500'>Documents</p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                <LiaFileVideo className='w-5 h-5 text-gray-500'/>
                    <p className='text-gray-500'>Doc.Cam</p>
                </div>
            </div>
        </>
    );
};

export default Navbar;

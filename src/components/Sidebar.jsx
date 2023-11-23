import React from 'react';
import logo from '../images/logo.png'
import profile from '../images/profile.png'
import { FiAlignLeft } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { BiListCheck } from "react-icons/bi";
import { CgEye } from "react-icons/cg";
import { MdPeople } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";


const Sidebar = () => {

    return (
        <div>
            <aside
                className={`sidebar w-full
          translate-x-0 transform bg-gray-200 h-full p-4 `}
            >
                <div className="">
                    <li
                        className='mb-2 flex text-sm py-2 px-6 gap-x-10 items-center relative '
                    >
                        <div className="flex items-center justify-stretch gap-4 border-2">
                            <img src={logo} width={40} height={40} alt="img" className />
                        </div>
                    </li>
                    <li
                        className='mb-4 flex text-xl py-2 px-6 gap-x-10 items-center relative'
                    >
                        <div className="flex items-center justify-stretch gap-4 border-2">
                            <FiAlignLeft className='w-8 h-8' />
                        </div>
                    </li>
                    {/* <li
                        className='mb-2 flex text-xl py-2 px-6 gap-x-10 items-center relative'
                    >
                        <div className="flex items-center justify-stretch gap-4 border-2">
                            <FaRegBell className='w-8 h-8 text-gray-500' />
                        </div>
                    </li> */}
                    <li className='mb-2 flex text-xl py-2 px-6 gap-x-10 items-center relative'>
                        <div className="flex items-center justify-stretch gap-4 border-2 relative">
                            <FaRegBell className='w-8 h-8 text-gray-500' />
                            <div className="absolute top-0 right-0 bg-orange-500 w-4 h-4 rounded-full"></div>
                        </div>
                    </li>
                    <li
                        className='mb-2 flex text-xl py-2 px-6 gap-x-10 items-center relative'
                    >
                        <div className="flex items-center justify-stretch gap-4 border-2">
                            <BsClockHistory className='w-8 h-8 text-gray-500' />
                        </div>
                    </li>
                    <li
                        className='mb-2 flex text-xl py-2 px-6 gap-x-10 items-center relative'
                    >
                        <div className="flex items-center justify-stretch gap-4 border-2">
                            <BiListCheck className='w-10 h-10 text-gray-500' />
                        </div>
                    </li>
                    <li
                        className='mb-2 flex text-xl py-2 px-6 gap-x-10 items-center relative'
                    >
                        <div className="flex items-center justify-stretch gap-4 border-2">
                            <CgEye className='w-8 h-8 text-gray-500' />
                        </div>
                    </li>
                    <li
                        className='mb-2 flex text-xl py-2 px-6 gap-x-10 items-center relative'
                    >
                        <div className="flex items-center justify-stretch gap-4 border-2">
                            <MdPeople className='w-8 h-8 text-gray-500' />
                        </div>
                    </li>
                    <li
                        className='mb-2 flex text-xl py-2 px-6 gap-x-10 items-center relative'
                    >
                        <div className="flex items-center justify-stretch gap-4 border-2">
                            <IoStatsChartSharp className='w-8 h-8 text-gray-500' />
                        </div>
                    </li>
                    {/* </ul> */}
                </div>
                <div className='mt-28'>
                    <li
                        className='mb-2 flex text-xl py-2 px-6 gap-x-10 items-center relative'
                    >
                        <div className="flex items-center justify-stretch gap-4 border-2">
                            <img src={profile} width={45} height={45} alt="img" className="rounded-full" />
                        </div>
                    </li>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;

"use client";

import Image from "next/image";
import {  AiOutlineLayout,AiOutlineCreditCard,AiOutlineMobile,AiOutlineSwap,AiOutlineHolder } from "react-icons/ai";
const BottomNav = () => {

    return (
        <div className="fixed bottom-0 bg-white py-2 px-4 flex items-center justify-center w-screen z-10">
            <div className="flex justify-between  space-x-6">
                <div className="">
                    <div className='flex-shrink-0 icon_btn p-1'>
                        <AiOutlineLayout
                            width={24}
                            height={24}
                        />
                    </div>
                    <p className='text-xs text-gray-150'>Dashbard</p>
                </div>
                <div className="">
                    <div className='flex-shrink-0  p-1'>
                        <AiOutlineSwap
                            width={24}
                            height={24}
                        />
                    </div>
                    <p className='text-xs'>Transfer</p>
                </div>
                <div className="">
                    <div className='flex-shrink-0  p-1'>
                        <AiOutlineCreditCard
                            width={24}
                            height={24}
                        />
                    </div>
                    <p className='text-xs'>Pay</p>
                </div>
                <div className="">
                    <div className='flex-shrink-0  p-1'>
                        <AiOutlineMobile 
                            width={24}
                            height={24}
                        />
                    </div>
                    <p className='text-xs'>Top Up</p>
                </div>
                <div className="">
                    <div className='flex-shrink-0  p-1'>
                        <AiOutlineHolder 
                            width={24}
                            height={24}
                        />
                    </div>
                    <p className='text-xs'>More</p>
                </div>
            </div>
        </div>

    );
};

export default BottomNav;
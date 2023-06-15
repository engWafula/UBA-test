"use client";

import { useState } from "react";
import Image from "next/image";


const Chart = () => {

    const data = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            data: [30, 20, 50],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      };
      

  
  return (
<div className='prompt_card'>
  <div className='flex justify-between items-start gap-5'>
    <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
      <div className='flex flex-col'>
        <h3 className='font-satoshi font-semibold text-gray-900'>
          Safe to Spend
        </h3>
        <p className='font-inter text-sm text-gray-500'>
          DAILY
        </p>
        <p className='font-inter text-lg text-red-500'>
          USH 119,422.50
        </p>
        <p className='font-inter text-sm text-gray-500'>
          WEEKLY
        </p>
        <p className='font-inter text-md text-gray-500'>
          USH 119,422.50
        </p>
        <p className='font-inter text-sm text-gray-500'>
          MONTHLY
        </p>
        <p className='font-inter text-md text-gray-500'>
          USH 3,407,875.17
        </p>
      </div>
      <div className='relative w-20 h-20 ml-7 mt-10'>
      <div className='absolute inset-0 rounded-full border-8 border-red-500'></div>
        <div className='absolute inset-0 rounded-full border-8 border-blue-500' style={{ margin: '-4px' }}></div>
        <div className='absolute inset-0 rounded-full border-8 border-green-500' style={{ margin: '-8px' }}></div>
        <div className='absolute inset-0 rounded-full border-8 border-indigo-500' style={{ margin: '-12px' }}></div>
      </div>

    </div>

    <div className='copy_btn'>
      <Image
        src="/assets/icons/settings.png"
        
        width={13}
        height={13}
      />
    </div>
  </div>
   <hr className="border-1 mt-3 border-gray"/>
  <div className='flex justify-center mt-auto border-t border-gray-100 pt-3'>
  <p className='font-inter text-sm text-red-500'>More &gt;</p>
  </div>
</div>


  );
};

export default Chart;
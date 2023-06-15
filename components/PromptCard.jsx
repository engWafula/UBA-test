"use client";

import { useState } from "react";
import Image from "next/image";

const PromptCard = () => {

  
  return (
<div className='prompt_card'>
  <div className='flex justify-between items-start gap-5'>
    <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
      <div className='flex flex-col'>
        <h3 className='font-satoshi font-semibold text-gray-900'>
          Accounts
        </h3>
        <p className='font-inter text-sm text-gray-500'>
          TOTAL BALANCE
        </p>
        <p className='font-inter text-lg text-red-500'>
          USH 7,443,410,126.00
        </p>
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

  <div className='flex justify-center mt-auto border-t border-gray-100 pt-3'>
  <p className='font-inter text-sm text-red-500'>More &gt;</p>
  </div>
</div>


  );
};

export default PromptCard;
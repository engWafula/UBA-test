"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const ShortCuts = () => {

  
  return (
<div className='prompt_card'>
  <div className='flex justify-between items-start gap-5'>
    <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
      <div className='flex flex-col'>
        <h3 className='font-satoshi font-semibold text-gray-900'>
          Shortcuts
        </h3>
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

  <div className='flex justify-center mt-auto border-t border-gray-100 pt-3 overflow-x-scroll'>
    <div className='flex  gap-3'>
        <div>
      <div className='flex-shrink-0 icon_btn p-1'>
        <Image
        src="/assets/icons/wallet.png"
        width={24}
          height={24}
          className='text-red-500'
        />
      </div>
      <p className='text-xs mt-2'>Wallet</p>
      </div>
      <div>
      <div className='flex-shrink-0 icon_btn p-1'>
        <Image
        src="/assets/icons/bill.png"
        width={24}
          height={24}
          className='text-red-500'
        />
      </div>
      <p className='text-xs mt-2'>Mpesa</p>
      </div>
      <div>
      <div className='flex-shrink-0 icon_btn p-1'>
        <Image
        src="/assets/icons/wallet.png"
        width={24}
          height={24}
          className='bg-red-500'
        />
      </div>
      <p className='text-xs mt-2'>Bill</p>

      </div>
      <div>
      <div className='flex-shrink-0 icon_btn p-1'>
        <Image
        src="/assets/icons/bill.png"
        width={24}
          height={24}
          className='text-red-500'
        />
      </div>
      <p className='text-xs mt-2'>Topup</p>
      </div>
      <div>
      <div className='flex-shrink-0 icon_btn p-1'>
        <Image
        src="/assets/icons/wallet.png"
        width={24}
          height={24}
          className='text-red-500'
        />
      </div>
      <p className='text-xs mt-2'>Withdraw</p>
      </div>
      <div>
      <div className='flex-shrink-0 icon_btn p-1'>
        <Image
        src="/assets/icons/bill.png"
        width={24}
          height={24}
          className='text-red-500'
        />
      </div>
      <p className='text-xs mt-2'>Deposit</p>
      </div>
    </div>
  </div>
</div>



  );
};

export default  ShortCuts ;
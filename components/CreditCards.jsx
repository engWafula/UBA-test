"use client";

import { useState } from "react";
import Image from "next/image";
import Cards from 'react-credit-cards-2';

const CreditCard = () => {

  
  return (
<div className='prompt_card'>
  <div className='flex justify-between items-start gap-5'>
    <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
      <div className='flex flex-col'>
        <h3 className='font-satoshi font-semibold text-gray-900'>
          Cards
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

  <div className='flex justify-center mt-auto border-t border-gray-100 pt-3'>
  <div>
        <div class="space-y-3">
            <div className="w-50 h-30 m-auto bg-gray-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            
                <img className="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png"/>
                
                <div class="w-full px-2 absolute top-2">
                    <div className="flex justify-between">
                        <div className="">
                            <p className="font-medium tracking-widest">
                                TUMUSIIME ABBY JAMES
                            </p>
                        </div>
                         <img className="w-5 h-5" src="https://i.imgur.com/bbPHJVe.png"/> 
                    </div>
                    <div className="pt-1">
                        <p className="font-medium tracking-more-wider">
                            **** **** **** ****
                        </p>
                    </div>
                    <div className="pt-2 pr-2">
                        <div className="flex justify-between">
                            <div className="">
                                <p className="font-light text-xs text-xs">
                                    Expiry
                                 </p>
                                <p className="font-medium tracking-wider text-sm">
                                    03/25
                                </p>
                            </div>
    
                            <div className="">
                                <p className="font-light text-xs">
                                    CVC
                                </p> 
                                <p className="font-bold tracking-more-wider text-sm">
                                    ···
                                </p>
                            </div>
                    </div>
                    </div>
            </div>
                </div>
            </div>
         
        </div>
  </div>
</div>


  );
};

export default CreditCard;
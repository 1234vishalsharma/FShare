import { AlignJustify } from 'lucide-react';
import React from 'react';

function TopHeader() {
  
  return (
    <div className='h-full w-full flex text-3xl text-main border-b'>
        <div className='flex h-full items-center pl-8 md:hidden'>
            <AlignJustify size={20} color="gray"/>
        </div>
        <div className='flex items-center justify-center w-full text-wrap overflow-hidden'>
            FShare 
        </div>
    </div>
  )
}

export default TopHeader;

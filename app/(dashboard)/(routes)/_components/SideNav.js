"use client"
import React, { useEffect, useState } from 'react'
import { UserButton } from '@clerk/nextjs'
import { Share, File, Shield, Router } from 'lucide-react';
import { useRouter } from 'next/navigation';
// Side nav component
function SideNav() {

  
  const [ActiveBtn, setActiveBtn] = useState(0);
  const router = useRouter()
  
    useEffect(()=>{
      router.push('/Load')
    }, [] )
  const menuItem = [
    {
      id: 1,
      name : 'Upload',
      icon: Share,
      path: '/Load'
    },
    {
      id: 2,
      name : 'File',
      icon: File,
      path: '/Files'
    },
    {
      id: 3,
      name : 'Upgrade',
      icon: Shield,
      path: '/Upgrad_e'
    },
  ]

  return (
    <div className='border-r h-full w-full max-md:hidden '>
      <div className='w-full flex justify-center h-20 text-gray-500 items-center  border-b'>
        <UserButton/>

      </div>
      <div className='w-full flex flex-col '>
        {menuItem.map((item,index)=>(
          <button className={`w-full flex gap-2 h-20  items-center float-start hover:bg-gray-100 px-6 ${ActiveBtn == index ? 'text-main bg-blue-50':null}`}
          onClick={()=>{setActiveBtn(index);
            router.push(menuItem[index].path)}}
           >
            <item.icon/>
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  )
}
export default SideNav;
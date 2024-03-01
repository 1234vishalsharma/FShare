"use client"
import { ShieldCheck } from 'lucide-react'
import React from 'react'

function Shield() {
    const upgradeHandeler = () => {
        alert("Working on the Payment gateway\n you can UPI on 9899955304 (Bs asae)");
        return;
    }
  return (
    <div className='flex flex-col border-2 border-green-500 rounded-lg h-96 w-100 p-8 justify-center items-center gap-4 mt-20 bg-blue-300'>
        <ShieldCheck size={96} color="blue"/>
        <p className='flex flex-wrap text-center text-lg font-semibold'>Enable advanced protection to your Data by becomming a premium member of FShare.</p>

        <button onClick={upgradeHandeler} className='border border-black p-4 bg-main text-white rounded-lg shadow-md'>Upgrade</button>
    </div>
  )
}

export default Shield

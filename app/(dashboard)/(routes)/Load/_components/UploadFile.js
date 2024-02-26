import { File, X } from 'lucide-react'
import React, { useState } from 'react'


function UploadFile({src,onRemoved}) {
    
  return (
    <div className='border-2 border-main border-dashed mt-8 rounded-lg h-28 flex justify-between items-center text-main gap-4 bg-white'>
        <div className='flex items-center'>
        <File color="blue" size={100}/>
        
            {src.name} <br/>
            {src?.type} <br/>
            {src.size} Bytes <br/> 


        </div>
        <div className='flex justify-end mr-8'>
            <X className='hover:bg-red-100 cursor-pointer rounded-md' onClick={onRemoved} size={30} color="red"/>
        </div>
    </div>
  )
}

export default UploadFile

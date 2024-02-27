import { CopyIcon } from 'lucide-react';
import React from 'react'
import { useState } from 'react';

const Fileinfo = ({file, OnPasswordSaved}) => {

  const [password,setPassword] = useState('');
  
  const handleChange = (event) => {
    setPassword(event.target.value)  
  }
  const copyHandeler = () =>{
    navigator.clipboard.writeText(file?.ShortUrl);
  }
 

  return (
    <div className='flex flex-col gap-4 p-8 w-full'>
        <label htmlFor="UserEmail" className="block text-lg font-medium text-gray-700"> File Url </label>
      <div className='w-full flex  rounded-md border border-gray-200'>

        <input
          value={file?.ShortUrl}
          type="url"
          placeholder="http://localhost:3000/"
          className="mt-1 w-5/6 shadow-sm sm:text-md p-4"
        />
        
        <CopyIcon onClick={copyHandeler} size={32} className='flex justify-center items-center h-full ml-4 cursor-pointer'/>
      </div>
    

      <div className='flex gap-4 w-full items-center justify-between'>
        <label htmlFor="UserEmail" className="block text-lg font-medium text-gray-700"> Add Password </label>
          <input
            onChange={handleChange}
            type="url"
            placeholder="eg: 123@1!^%abAC (Optional)"
            className="mt-1 w-full border rounded-md border-gray-200 shadow-sm sm:text-md p-4"
          />
        <button className='border-black border bg-slate-500 text-white p-4 rounded-lg' onClick={()=>OnPasswordSaved(password)}>
          Add Password</button>
      </div>
      <h2 className='text-center mt-5 font-bold text-slate-400 text-2xl'>Share the provided link to share the file.</h2>
    </div>
  )}

export default Fileinfo

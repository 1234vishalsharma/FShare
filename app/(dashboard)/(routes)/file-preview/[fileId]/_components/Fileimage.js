import React from 'react'

const Fileimage = ({file}) => {

  return (
    <div className='h-80 w-full m-4 flex flex-col rounded-lg overflow-hidden py-6 justify-center items-centers'>
          <img className='w-full h-5/6 object-cover' src={file?.FileUrl} alt="Loading File..." />
      <div className='flex w-full justify-center font-semibold h-1/4'>
        <h2>File Name: {file?.FileName}</h2>
      </div>
    </div>
   
  )
}

export default Fileimage

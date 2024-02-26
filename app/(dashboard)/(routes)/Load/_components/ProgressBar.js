import React from 'react'

function ProgressBar({progress = 0}) {
  return (
    
      <div className='w-full mt-8'>
        <span id="ProgressLabel" className="sr-only">Loading</span>

        <span
            role="progressbar"
            aria-labelledby="ProgressLabel"
            aria-valuenow={progress}
            className="relative block rounded-full bg-gray-200"
        >
            <span className="absolute inset-0 flex items-center justify-center text-[15px]/4">
            <span className="font-semibold text-black"> {progress} %  successful</span>
            </span>

            <span className="block h-4 rounded-full bg-indigo-600 text-center" style={{width: `${progress}%`}}>  </span>
        </span>
    </div>

  )
}

export default ProgressBar

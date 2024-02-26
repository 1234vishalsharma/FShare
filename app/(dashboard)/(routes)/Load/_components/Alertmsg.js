import { AlertCircle } from 'lucide-react'
import React from 'react'

const Alertmsg = ({msg}) => {
  return (
    <div className='flex gap-4 justify-center items-center mt-4 text-red-500'>
      <AlertCircle/>
      {msg}
    </div>
  )
}

export default Alertmsg

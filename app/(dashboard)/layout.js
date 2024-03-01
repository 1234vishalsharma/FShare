import React from 'react'
import SideNav from './(routes)/_components/SideNav';
import TopHeader from './(routes)/_components/TopHeader';

function layout({children}) {
  return (
      <div className='flex'>
        <div className='h-screen w-56 fixed'>
            <SideNav></SideNav>
        </div>  
          <div className='ml-56 h-20 w-screen max-md:ml-0'>
              <TopHeader></TopHeader>
              {children}
        </div>
    </div>
  )
}

export default layout


import Image from 'next/image'
import React from 'react'
import welcome from "../../../public/assets/icons/welcom.png"
import SidebarComponent from '@/components/SidebarComponent'
import NavbarComponent from '@/components/NavbarComponent'

const layout = (  {children} ) => {
  return (
    <>
    <div className='w-full flex '>
      <div className='w-[25%] h-[100px]  px-8 mt-3'>
        <SidebarComponent/>
       
      </div>
      <div className='w-[75%]'>
        <NavbarComponent/>
        {children} 
        {/* <div className='w-full h-full px-[28%] mt-[12%]'>
          <Image src={welcome}/>
        </div> */}
      </div>
    </div>
    </>
  )
}

export default layout
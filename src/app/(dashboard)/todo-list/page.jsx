
import React from 'react'
import Image from 'next/image';
import welcome from '../../../../public/assets/icons/welcom.png'


const TodoListPage = async() => {
  return (
    <>
    <div >
    <Image
              className="rounded-2xl max-h-[1600px] mx-[30%] my-[10%]"
              src={welcome}
              alt="login form image"
            />
    </div>
    </>
  )
}

export default TodoListPage;

import React from 'react'

function Day({day}) {
  return (
    <div className='w-[50px] h-[38px] rounded-full text-md bg-white flex justify-center items-center cursor-pointer transition duration-150 ease-in hover:ease-out'>
        {day}
    </div>
  )
}

export default Day
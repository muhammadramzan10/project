import React from 'react'
import {
    TrophyIcon,
    CircleStackIcon
} from '@heroicons/react/24/outline'

function Xpbox() {
    return (
        <div className='w-full h-full flex bg-white bg-opacity-50 p-2 rounded-md shadow-sm'>
            <div className='flex flex-col items-center justify-around w-[50%] h-full border-r-[4px]'>
                <div className='flex w-[80%] items-center justify-around' >
                    <p className='text-xl'>Daily XP </p>
                    <TrophyIcon className='w-6 h-6' />
                </div>
                <div className='text-3xl text-bold'>0/100</div>
            </div>
            <div className='flex flex-col items-center justify-around w-[50%] h-full '>
                <div className='flex w-[80%] items-center justify-around' >
                    <p className='text-xl'>Total XP </p>
                    <CircleStackIcon className='w-6 h-6' />
                </div>
                <div className='text-3xl text-bold'>0 XP</div>
            </div>
        </div>
    )
}

export default Xpbox

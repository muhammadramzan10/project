import React from 'react'
import Day from './Day'

function Week({week}) {
    return (
        <div className=' flex justify-center items-center w-full h-full g-white'>
            <div className='flex flex-col items-center justify-between gap-5'>
                <div className='flex justify-center items-center w-[100%] h-[30%] text-8xl text-[#051A2C] cursor-pointer'>Week {week}</div>
                <div className='w-full h-[30%] flex items-center justify-around gap-4'>
                    <Day day={'M'}/>
                    <Day day={'T'}/>
                    <Day day={'W'}/>
                    <Day day={'TH'}/>
                    <Day day={'F'}/>
                    <Day day={'S'}/>
                    <Day day={'S'}/>

                </div>

            </div>
        </div>
    )
}

export default Week

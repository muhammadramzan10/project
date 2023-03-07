import React from 'react'
import {
	HomeIcon,
	ChartBarSquareIcon,
	MusicalNoteIcon,
	CalendarDaysIcon
} from '@heroicons/react/24/outline'

function Sidebar() {
	return (
		<div className='h-full bg-[#051A2C]'>
			<div className='h-[70%] flex flex-col justify-evenly items-center'>

				<div className=' text-5xl text-[#fff]'>Productify</div>
				<div className='h-[40%] w-full flex flex-col items-start'>

					<div className='group w-full px-4 py-1 flex items-center hover:bg-white hover:bg-opacity-25 hover:shadow-lg hover:border-transparent'>
						<HomeIcon className='h-8 w-8 text-[#fff]' />
						<p className=' text-lg text-bold text-[#fff] ml-2'>Home</p>
					</div>
					<div className='group w-full px-4 py-1 flex items-center hover:bg-white hover:bg-opacity-25 hover:shadow-lg hover:border-transparent'>
						<ChartBarSquareIcon className='h-8 w-8 text-[#fff]' />
						<p className=' text-base  text-[#fff] ml-2'>Analytics</p>
					</div>
					<div className='group w-full px-4 py-1 flex items-center hover:bg-white hover:bg-opacity-25 hover:shadow-lg hover:border-transparent'>
						<MusicalNoteIcon className='h-8 w-8 text-[#fff]' />
						<p className=' text-base text-[#fff] ml-2'>Lo-fi</p>
					</div>
					<div className='group w-full px-4 py-1 flex items-center hover:bg-white hover:bg-opacity-25 hover:shadow-lg hover:border-transparent'>
						<CalendarDaysIcon className='h-8 w-8 text-[#fff] ' />
						<p className=' text-base text-[#fff] ml-2'>Plans</p>
					</div>

				</div>

			</div>

		</div>
	)
}

// 10% #3B3936
// 30% #486966
// 60% #B2BEBF 

export default Sidebar

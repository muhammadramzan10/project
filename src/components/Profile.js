import React, {useState} from 'react'

function Profile() {
    const [percent, setPercent] = useState(90)

    return (

    
    <div className='w-full h-full flex items-center justify-around'>
        <div>
            <h1 className='text-3xl text-[#051A2C]'>Hey, Ramzan!</h1>
            <p className='text-[#051A2C]'>Profile 90% Complete</p>
            <input type="range" name="" value={percent} onClick={(ev) => setPercent(ev.target.value)} />
        </div>
        <img src="./photo.jpg" alt=""className='h-[80%] rounded-[50%]'/>

      
    </div>
  )
}

export default Profile

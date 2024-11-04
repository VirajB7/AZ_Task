import React from 'react'
import CardList from './Card'
import WindowLength from '../components/WindowLength'
import { chapters } from '../constants/constants';
import '../index.css'

function MainPage() {
  const isWindowLarge = WindowLength();
  return (
    <div className={`${isWindowLarge?' ml-48 mr-12 h-[88vh]':'h-[70vh]'} overflow-auto mt-20 border-[1px] border-[#A4E6FF]  w-[80vw] rounded-md `}>
      <div className='mt-4 flex p-4 justify-between items-center  h-[10%] w-auto'>
        <div className='flex justify-center items-center p-2 rounded-md gap-2 bg-opacity-40 bg-gradient-to-b from-[#EFF5FF] to-transparent'>
          <div className='flex gap-[4px] p-[4px]'>
            <img src='./CalendarOutline.svg' alt="toggle" className="w-4 h-4" />
            <span className='text-[0.7rem]'>Mentor Sessions</span>
          </div>
          <div className='flex gap-[4px] bg-white font-bold rounded-md shadow-md p-[4px] '>
              <img src='./BriefcaseOutline.svg' alt="toggle" className="w-4 h-4" />
              <span className='text-[0.7rem]'>Learning Material</span>        
          </div>
        </div>
        <div className='flex gap-[4px] p-2 mr-6 bg-white rounded-md items-center justify-between p-[1px] border-[1px] border-solid border-[#99E4FF]'>
              <img src='./InformationCircleOutline.svg' alt="toggle" className="w-4 h-4" />
              <span className='text-[0.7rem]'>How it Works</span>        
        </div>
      </div>    
      <div className='flex justify-between  h-[80%] w-[100%]'>
        <div className='pl-6 items-center w-[18%] space-y-2'>
            {
              chapters.map((chapter)=>(
                <div key={chapter.id} className={`${chapter.id===1?'bg-[#EFF5FF] font-medium':''} flex gap-[4px] p-2 rounded-md justify-between items-center  hover:bg-[#EFF5FF] hover:font-medium `}
                  >

                <div className={`flex items-center justify-between `}><span className='text-[0.7rem]'>{chapter.name}</span></div>
                  <div className={`${chapter.id===1? 'flex items-center justify-between':'flex hidden'} `}>
                    <img src='./ClockOutline.svg' alt="toggle" className="w-4 h-4" />
                    <span className='text-[0.7rem] text-[#608AD2]'>05:00:00</span>
                  </div>
                </div>
            ))
            }
        </div>
        <div className='w-[80%]'><CardList/></div>
        
      </div>
    </div>

  )
}

export default MainPage
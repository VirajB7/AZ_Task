import React, { useState } from 'react';
import { childList } from '../constants/constants';
import WindowLength from '../components/WindowLength'

// SVG Components
const UpArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

const DownArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Progress Bar Component
const ProgressBar = ({ progress = 0, color = "bg-blue-500", height = "h-1" }) => {
  return (
    <div className="w-full bg-gray-200 rounded-lg" style={{ height: '2px' }}>
      <div
        className={`${color} ${height} transition-all rounded-bl-lg  duration-300 ease-in-out`}
        style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
      />
    </div>
  );
};

export const CollapsibleCard = ({
  part,
  description,
  time,
  difficulty,
  subTasks,
  progress,
  progressColor = "bg-blue-500",
  progressHeight = "h-2",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const index=part.split(' ')[1]
  const subTasksList = childList[index-1];
  const isWindowLarge = WindowLength();

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-auto mx-auto mb-4">
      <div className="bg-white rounded-lg shadow-lg">
        {/* Card Header */}
        <div
          className=" p-4 cursor-pointer hover:bg-gray-50 hover:rounded-lg transition-colors"
          onClick={toggleCard}
        >
          <div className="flex flex-row  justify-between h-[100%] w-[100%]">
            <div className=" flex flex-row h-[100%] w-[100%]">
              <div className="flex flex-col  justify-between  h-[100%] w-[50%] ">
                <div><span className="text-[#17384D] text-md">{part}</span></div>
                <div><span className={`text-black-500 ${isWindowLarge?'text-md':'text-sm'}`}>{description}</span></div>
              </div>


              <div className="flex-col space-y-2 justify-between items-end  h-[100%] w-[50%] ">
                        <div className=' flex justify-end gap-4 p-2'>
                            <div className='flex justify-between'>
                                <img src="/ClockOutline.svg" alt="clock" className={`${isWindowLarge?'w-6 h-6':'w-4 h-4'}`}/>
                                <span className={`text-[#17384D] ${isWindowLarge?'text-md':'text-[0.75rem]'}`}>{time}</span>
                            </div>
                            <div  className='flex justify-between'>
                                <img src="/ChartBarOutline.svg" alt="diff" className={`${isWindowLarge?'w-6 h-6':'w-4 h-4'}`} />
                                <span className={`text-[#17384D] ${isWindowLarge?'text-md':'text-[0.75rem]'}`}>{difficulty}</span>
                            </div>
                            <div  className='flex justify-between'>
                                <img src="/DocumentDuplicateOutline.svg" alt="clock" className={`${isWindowLarge?'w-6 h-6':'w-4 h-4'}`} />
                                <span className={`text-[#17384D] ${isWindowLarge?'text-md':'text-[0.75rem]'}`}>{subTasks}</span>
                            </div>
                            <button
                                className=" hover:bg-gray-100 rounded-full transition-colors"
                                aria-label={isOpen ? 'Close details' : 'Show details'}
                                >
                                {isOpen ? <UpArrow /> : <DownArrow />}
                            </button>


                        </div>
                        <div className='justify-end flex '>
                            <span className="text-[#17384D] p-[2px] text-[0.75rem] bg-[#EFF5FF] border-[1px] border-solid border-[#99E4FF] rounded-sm">{progress}% Completed</span>
                        </div>
              </div>
            </div>
            
          </div>
        </div>
        <ProgressBar className={`rounded-lg`} 
          progress={progress}
          color={progressColor}
          height={progressHeight}
        />
        {/* Card Content */}
         <div
          className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : ' max-h-0 hidden'}`}
        >
          <div className="p-4 border-t border-gray-100 space-y-4">
            <div className="flex flex-col justify-between items-left">
              
                {subTasksList.map((item) => (
                  <div key={item.id} className="flex text-[#172B4D] gap-4 p-2 items-center justify-between hover:bg-[#D6F4FF] active:bg-[#D6F4FF]-700">
                    <div className="flex gap-2 p-2">
                      <img src={item.icon} alt={item.name} className="w-4 h-4" />
                      <span className="text-gray-500 text-sm">{item.name}</span>
                    </div>
                    <div className="flex gap-2 p-2">
                      <img src={item.icon2} alt={item.time} className="w-4 h-4" />
                      <span className="text-gray-500 text-sm">{item.time}</span>
                    </div>
                  </div>
                ))}
             
            </div>
          </div>   
        </div> 
        </div>
        {/* Progress Bar */}
     
      </div>
  );
};


import React, {useState} from 'react'
import {sidebarItems} from '../constants/constants'
import WindowLength from '../components/WindowLength'

const SidebarItems =()=>(
    <ul className="flex flex-col justify-between items-left">
        <div className="w-auto h-screen space-y-1">
        {
            
            sidebarItems.map((item)=>(
                
                <li key={item.id} className={`flex text-[#172B4D]
                   ${item.name==='Upskill'?'bg-[#D6F4FF]':''}
  gap-4 p-2  items-left hover:bg-[#D6F4FF] active:bg-[#D6F4FF]-700`}>
                    <img src={item.icon} alt={item.name} className="w-4 h-4" />
                    {item.name}
                </li>
                
            ))
            
        }
        </div>
    </ul>
);





const Sidebar=()=> {
    const isWindowLarge = WindowLength();
    const [isMenuOpen, setIsMenuOpen] = useState(isWindowLarge ? true:false);
    const closeMenu = () =>setIsMenuOpen(false);
    const toggleMenu = () =>setIsMenuOpen(!isMenuOpen);

  return (
     
    <header className=" fixed top-0 left-0 right-0">
    <div className="pl-6 max-w-7xl z-20 bg-[#fbfbfb] w-screen">
      <div className="flex flex-row justify-between gap-2 items-center ">
      <div className="flex flex-row items-center py-5">
        <button
            onClick={isWindowLarge?(isMenuOpen?null:setIsMenuOpen(true)):(toggleMenu)}
            className="text-[#172B4D] hover:text-white focus:outline-none flex"
            aria-label="Toggle menu">
            <img src='./Menu.svg' alt="toggle" className="w-6 h-6" />
        </button>
            
        <p className="ml-4 text-[#172B4D] font-bold text-xl ">
            AlgoZenith
        </p>
      </div>
      <div className="flex flex-row items-center px-5">
      <button
            
            className=" hover:text-white focus:outline-none flex"
            aria-label="Notification Icon">
            <img src='/Bell.svg' alt="toggle" className="w-1/2 h-auto" />
        </button>
        <button
            className="text-[#172B4D] hover:text-white focus:outline-none flex"
            aria-label="Profile Pic">
            <img src='/Ellipse 13.svg' alt="toggle" className="w-1/2 h-auto" />
        </button>
      </div>
      </div>
    </div>

    <div className={` pl-6 mt-2 fixed left-auto top-auto ${isWindowLarge?'text-white transition-transform duration-500 transform left-0  h-full':' nav-sidebar left-0'} bg-white-700 
     ${isMenuOpen?`max-h-screen ${isWindowLarge?'translate-x-0':'translate-y-0 bg-[#ECDFCC] h-[50%]'}`:`max-h-0 ${isWindowLarge?'-translate-x-[120%]':'bg-[#ECDFCC] h-[50%]'}`}`}>
      <nav>
        <SidebarItems onClick={closeMenu} />
      </nav>
    </div>
  </header>
  )
}

export default Sidebar
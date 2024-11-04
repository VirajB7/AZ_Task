import {useState,useEffect} from 'react'

function WindowLength(){
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
    useEffect(()=>{
        const handleResize = ()=>{
            setIsLargeScreen(window.innerWidth >= 1024);  
        };
    
        window.addEventListener('resize',handleResize)
        return ()=> window.removeEventListener('resize',handleResize)
    },[]);

    return isLargeScreen;
}

export default WindowLength

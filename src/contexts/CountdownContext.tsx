import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";


interface CountdownContextData {
    minutes:number,
    seconds:number,
    hasFinished:boolean,
    isActive:boolean,
    startCountdown:()=>void,
    resetCountdown:()=>void,
}

export const CountdownContext = createContext({} as CountdownContextData)
interface ICountdownProviver{
    children:ReactNode
}

export const CountdownProviver = ({children}:ICountdownProviver) => {
let countdownTimeout : NodeJS.Timeout;

    const {startNewChallenge} = useContext(ChallengesContext);
    const [time,setTime] = useState(25 * 60)
    const [isActive,setIsActive] = useState(false)
    const [hasFinished,setHasFinished] = useState(false)
  
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;


    const startCountdown = () => {
        setIsActive(true)
      }
    
      const resetCountdown = () => {
           clearTimeout(countdownTimeout)
           setIsActive(false)
           setTime(25*60)
           setHasFinished(false)
      }
    
      useEffect(()=>{
            if(isActive && time > 0){
             countdownTimeout = setTimeout(() => {
                    setTime(time - 1)
              }, 1000);
            }else if(isActive && time === 0){
                setIsActive(false)
                setHasFinished(true)
                startNewChallenge();
            }
      },[isActive,time])
    

    return(
        <CountdownContext.Provider value={{minutes,seconds,hasFinished,startCountdown,resetCountdown,isActive}}>
                {children}
        </CountdownContext.Provider>
    )
}
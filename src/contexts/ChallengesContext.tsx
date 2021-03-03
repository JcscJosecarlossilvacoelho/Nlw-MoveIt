import { createContext, useState,ReactNode, useEffect } from "react";
import challenges from '../../challenges.json';
import Cookies from 'js-cookie'
import LevelUpModal from "../components/LevelUpModal";
interface Challenge {
    type:'body' | 'eye';
    description:string;
    amount:number;
}

interface IChallengesProvider{
    children:ReactNode
    level:number,
    currentExperience:number,
    challengesCompleted:number,
}

interface ChallengesContextData {
    level:number,
    currentExperience:number,
    challengesCompleted:number,
    experienceToNextLevel:number,
    activeChallenge : Challenge 
    levelUp:()=>void,
    startNewChallenge:()=>void,
    resetChallenge:()=>void,
    completedChallenge:()=>void,
}

export const ChallengesContext = createContext({} as ChallengesContextData );

export const ChallengesProvider = ({children,...rest}:IChallengesProvider) => {
    const [level,setLevel] = useState(rest.level ?? 1)
    const [currentExperience,setCurrentExperience] = useState(rest.currentExperience ?? 0)
    const [challengesCompleted,setChallengesCompleted] = useState(rest.level ?? 0)

    const [activeChallenge,setActiveChallenge] = useState(null)
    const [isLevelUpModalOpen,setIsLevelUpModalOpen] = useState(false)
    const experienceToNextLevel = Math.pow(( level + 1 ) * 4, 2)

    useEffect(()=>{
        Cookies.set('level',String(level))
        Cookies.set('currentExperience',String(currentExperience))
        Cookies.set('challengesCompleted',String(challengesCompleted))


    },[level,currentExperience,challengesCompleted])

    useEffect(()=>{
        Notification.requestPermission();

    },[])
    const levelUp = () => {
        setLevel(level+1)
    }
    const startNewChallenge =() => {
        const randomChallengIndex = Math.floor((Math.random() * challenges.length))
        const challenge =  challenges[randomChallengIndex];

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()

        if(Notification.permission === 'granted'){
            new Notification('Novo desafio 🎉',{
                icon:'/icons/favicon.png',
                body:`Valendo ${challenge.amount}px`
            })
        }
    }

    const resetChallenge = () => {
        setActiveChallenge(null)
    }

    const completedChallenge = () => {
        if(!activeChallenge){
            return;
        }
        const {amount} = activeChallenge;
        let finalExperience = currentExperience + amount;
        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }
        setCurrentExperience(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted+1)
    }

    return(
    <ChallengesContext.Provider value={{level,currentExperience,challengesCompleted,levelUp,
    startNewChallenge,activeChallenge,resetChallenge,experienceToNextLevel,completedChallenge}}>
        {children}
        
    </ChallengesContext.Provider>

    )
}
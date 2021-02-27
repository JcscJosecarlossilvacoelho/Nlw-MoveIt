import { useState , useEffect } from 'react';
import { Container,Button } from './styles';
import { AiFillCheckCircle } from "react-icons/ai";
import theme from '../../styles/theme';
let countdownTimeout : NodeJS.Timeout;

const CountDown: React.FC = () => {
  const [time,setTime] = useState(0.1 * 60)
  const [isActive,setIsActive] = useState(false)
  const [hasFinished,setHasFinished] = useState(false)
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft,minuteRigth] = String(minutes).padStart(2,'0').split('');
  const [secondLeft,secondRigth] = String(seconds).padStart(2,'0').split('');

  const startCountdown = () => {
    setIsActive(true)
  }
  const resetCountdown = () => {
       clearTimeout(countdownTimeout)
       setIsActive(false)
       setTime(0.1*60)
  }
  useEffect(()=>{
        if(isActive && time > 0){
         countdownTimeout = setTimeout(() => {
                setTime(time - 1)
          }, 1000);
        }else if(isActive && time === 0){
            setIsActive(false)
            setHasFinished(true)
        }
  },[isActive,time])
  return (
   <>
   <Container>
      <div>
          <span>{minuteLeft}</span>
          <span>{minuteRigth}</span>
      </div>
      <span>
          :
      </span>
      <div>
          <span>{secondLeft}</span>
          <span>{secondRigth}</span>
      </div>
  </Container>
  {hasFinished ? (
         <Button disabled  isActive={false}>
              Ciclo Encerrado
              <AiFillCheckCircle  ></AiFillCheckCircle>
        </Button>
   ): (
       <>
            {isActive ?(
                    <Button  isActive  onClick={()=>resetCountdown()}>
                        Abandonar um ciclo
                    </Button>
            ):(
                    <Button isActive={false} onClick={()=>startCountdown()}>
                        Iniciar um ciclo
                    </Button>
            )}
       </>
   )}


  </>
  )
  ;
}

export default CountDown;
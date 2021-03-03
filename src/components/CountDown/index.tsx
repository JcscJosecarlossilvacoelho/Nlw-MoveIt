import { useState , useEffect, useContext } from 'react';
import { Container,Button } from './styles';
import { AiFillCheckCircle } from "react-icons/ai";
import theme from '../../styles/theme';
import { CountdownContext } from '../../contexts/CountdownContext';

const CountDown: React.FC = () => {
  const {
      hasFinished,
      seconds,
      minutes,
      startCountdown,
      resetCountdown,
      isActive
  } = useContext(CountdownContext);
  
  const [minuteLeft,minuteRigth] = String(minutes).padStart(2,'0').split('');
  const [secondLeft,secondRigth] = String(seconds).padStart(2,'0').split('');

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
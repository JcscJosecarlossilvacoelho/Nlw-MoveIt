import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Container ,ChallengNotActive,ChallengActive } from './styles';

const ChallengBox: React.FC = () => {
  const {activeChallenge,resetChallenge,completedChallenge} = useContext(ChallengesContext);
  const {resetCountdown} = useContext(CountdownContext);
  
  const handleChallengSucceded = () => {
    completedChallenge();
    resetCountdown()
  }
const handleFailedSucceded = () => {
      resetChallenge();
      resetCountdown();
  }
  return <Container>
      {activeChallenge ? (
            <ChallengActive>
                <header>Ganhe {activeChallenge.amount} px</header>
                <main>
                    <img src={`icons/${activeChallenge.type}.svg`}></img>
                    <strong>Novo desafio</strong>
                    <p>{activeChallenge.description}</p>
                </main>
                <footer>
                    <button onClick={()=>handleFailedSucceded()} type="button" >
                      Falhei
                    </button>
                    <button onClick={()=>handleChallengSucceded()} type="button" >
                        Completei
                    </button>
                </footer>
            </ChallengActive>
      ) : (
        <ChallengNotActive>
            <strong>Finilize um ciclo para receber um desafio</strong>
            <p>
                <img src="icons/level-up.svg"></img>
                Avance de Level completando desafios
            </p>
         </ChallengNotActive>

      )}
          
  </Container>;
}

export default ChallengBox;
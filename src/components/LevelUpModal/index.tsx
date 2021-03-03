import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container ,OverLay} from './styles';

const LevelUpModal: React.FC = () => {
  const {level} = useContext(ChallengesContext);
  return <OverLay>
          <Container>
              <header>{level}</header>
              <strong>Parabéns</strong>
              <p>Você alcançou um novo nivel</p>
              <button>
                <img src="/icons/close.svg" alt="Fechar Modal"></img>
              </button>
          </Container>
    </OverLay>

 ;
}

export default LevelUpModal;
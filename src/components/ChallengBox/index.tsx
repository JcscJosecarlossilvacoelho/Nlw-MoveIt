import { Container ,ChallengNotActive,ChallengActive } from './styles';

const ChallengBox: React.FC = () => {
    const hasActiveChalleng = true;
  return <Container>
      {hasActiveChalleng ? (
            <ChallengActive>
                <header>Ganhe 400px</header>
                <main>
                    <img src="icons/body.svg"></img>
                    <strong>Novo desafio</strong>
                    <p>Qualquer coisa</p>
                </main>
                <footer>
                    <button type="button" >
                      Falhei
                    </button>
                    <button type="button" >
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
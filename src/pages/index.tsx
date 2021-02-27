import { Container } from "../styles/pages/index";
import CompletedChallenges from "../components/CompletedChallenges"
import ExperienceBar from "../components/ExperienceBar"
import Profile from "../components/Profile"
import CountDown from "../components/CountDown";
import ChallengBox   from "../components/ChallengBox";

import Head from 'next/head'
const Home: React.FC = () => {
  return <Container >
    <Head>
      <title>Inicio / Move.it</title>
    </Head>
      <ExperienceBar></ExperienceBar>

    <section >
      <div>
        <Profile></Profile>
        <CompletedChallenges></CompletedChallenges>
        <CountDown></CountDown>
      </div>
      <div>
        <ChallengBox></ChallengBox>
      </div>
    </section>

  </Container>;
}

export default Home;



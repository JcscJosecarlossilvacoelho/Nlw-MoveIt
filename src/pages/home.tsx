import { Container } from "../styles/pages/home";
import {GetServerSideProps} from 'next'
import CompletedChallenges from "../components/CompletedChallenges"
import ExperienceBar from "../components/ExperienceBar"
import Profile from "../components/Profile"
import CountDown from "../components/CountDown";
import ChallengBox   from "../components/ChallengBox";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import LevelUpModal from "../components/LevelUpModal";

import Head from 'next/head'
import { CountdownProviver } from "../contexts/CountdownContext";

interface HomeProps {
  level:number,
  currentExperience:number,
  challengesCompleted:number,
  username:string,
  avatar:string,
}

const Home: React.FC<HomeProps> = (props) => {
  console.log(props)
  return <Container >
       <ChallengesProvider level={props.level} 
                          currentExperience={props.currentExperience} 
                          challengesCompleted={props.challengesCompleted} 
       >
        {/* <LevelUpModal/> */}
      
    <Head>
      <title>Inicio / Move.it</title>
    </Head>
      <ExperienceBar></ExperienceBar>
    <CountdownProviver>
    <section >
      <div>
        <Profile avatar={props.avatar} username={props.username}></Profile>
        <CompletedChallenges></CompletedChallenges>
        <CountDown></CountDown>
      </div>
      <div>
        <ChallengBox></ChallengBox>
      </div>
    </section>
    </CountdownProviver>
    </ChallengesProvider>

  </Container>;
}

export default Home;


export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const {level,currentExperience , challengesCompleted , name,avatar} =ctx.req.cookies
  console.log(name)
  
  return {
      props:{
        level:Number(level),
        currentExperience:Number(currentExperience),
        challengesCompleted:Number(challengesCompleted),
        username:name,
        avatar:avatar,
      }
  }
}
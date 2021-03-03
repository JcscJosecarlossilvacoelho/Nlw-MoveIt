import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { Container } from "./styles";

interface ProfileProps {
  username:string,
  avatar:string,
}
const Profile: React.FC<ProfileProps> = ({avatar,username} : ProfileProps) => {
  const {level} = useContext(ChallengesContext);


  return <Container className="flex items-center ">
    <img  src={avatar}></img>
    <div  >
      <strong >{username}</strong>
      <p>
        <img  src="icons/level.svg" alt="Level"></img>
        Level {level}
      </p>
    </div>
  </Container>
}

export default Profile;
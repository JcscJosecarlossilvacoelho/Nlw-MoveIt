import { Container } from "./styles";
const Profile: React.FC = () => {
  return <Container className="flex items-center ">
    <img  src="https://avatars.githubusercontent.com/u/44404484?s=60&v=4"></img>
    <div  >
      <strong >José Coelho</strong>
      <p>
        <img  src="icons/level.svg" alt="Level"></img>
        Level 1
      </p>
    </div>
  </Container>
}

export default Profile;
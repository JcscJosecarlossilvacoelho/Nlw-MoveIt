import { Container } from "../styles/pages/index";
import Head from 'next/head'
import { ChangeEvent, useState } from "react";
import Cookies from "js-cookie";
import Router from 'next/router'
const Login: React.FC = () => {

  const [isInputTextChange,setIsInputTextchange] = useState(false)
  const [username,set_username] = useState('')

  const handleInputChage = (e:ChangeEvent<HTMLInputElement>) => {
      if(e.target.value){
        setIsInputTextchange(true)
      }else{
        setIsInputTextchange(false)
      }
      set_username(e.target.value)
  }

  const handleLogin = async () =>{
     const user = await (await fetch(`https://api.github.com/users/${username}`)).json();
     Cookies.set('name',String(user.name))
     Cookies.set('avatar',String(user.avatar_url))
     Router.push('/home')
  }

  return <Container >
        <Head>
          <title>Inicio / Move.it</title>
        </Head>
        <section>
          <img src='/Simbolo.svg'></img>
          <div>
            <img src='/Logo.svg'></img>
            <h2>Bem-Vindo</h2>
            <div className="gitHub">
              <img src="/icons/Github.svg" alt="Github"></img>
              <span>Faça login com seu Github <br></br>para começar</span>
            </div>
            <div className="inputContainer">
              <input onChange={(e)=>handleInputChage(e)} placeholder=" Digite seu Username"></input>
              <button onClick={()=>handleLogin()} disabled={!isInputTextChange} >
                  <img src="/icons/Vector.svg" alt="Github"></img>

              </button>
            </div>
          </div>
        </section>
  </Container>;
}

export default Login;



import styled from 'styled-components';

export const Container = styled.div`
   background:${props=>props.theme.colors.blue};
   height:100vh;
   width:100vw;
   section{
    flex:1;
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-content:center;
   
    & > div {
        display:flex;
        flex-direction:column;
        justify-content:center;
        & > img{
                 height: 4rem;
                 width:15rem;
          }
        h2{
            font-size:2.25rem;
            color:${props=>props.theme.colors.white};
            font-weight:bold;
            margin-top:4rem;
        }
        .gitHub{
            display:flex;
            flex-direction:row;
            margin-top:2.5rem;

            img{
                margin-right:0.4rem;
                height:1.8rem;
            }
            span{
                color:${props=>props.theme.colors.white};
                opacity:0.8;
                margin-left:0.4rem;
            }
        }
        .inputContainer{
            display:flex;
            flex-direction:row;
            margin-top:4rem;

            input{
                width:18rem;
                height:4rem;
                background-image:linear-gradient(90deg,#4953B8 25%,rgba(71, 81, 184, 0.9));
                border:none;
                color:#B2B9FF;
                border-radius:5px 0 0 5px;
                padding: 20px;
            }
            input::placeholder { /* Most modern browsers support this now. */
              color:    #B2B9FF;
            }
            input:focus { /* Most modern browsers support this now. */
                border:none;
                outline-width: 0;
            }
            button{
                border-radius:0 5px 5px 0;

                width:4rem;
                height:4rem;
                display:flex;
                align-items:center;
                justify-content:center;
                border:0;
                background:${props=> props.theme.colors.green };
                color: ${props=> props.theme.colors.white};
                font-weight:600;
                transition:background-color 0.2s;
                :not(:disabled):hover{
                    background:#44bb26;
                    color:${props=> props.theme.colors.white};
                    }
                    :disabled{
                        background:${props=> props.theme.colors.blueDark};
                        color:${props=> props.theme.colors.text};
                        cursor:not-allowed;
                        svg{
                            margin-left:0.5rem;
                            font-size:1.2rem;
                            color:${props=> props.theme.colors.green};
                        }
                    }
            }
        }
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
   display:flex;
   align-items:center;
   font-family:Rajdhani;
   font-weight:600;
   color:${props=>props.theme.colors.title};
   & > span{
      font-size:6.25rem;
      margin:0 0.5rem;
   }
   & > div{
        flex:1;
        display:flex;
        align-items:center;
        justify-content:space-evenly;
        background:${props=>props.theme.colors.white};
        box-shadow:0 0 40px rgba(0,0,0,0.1);
        border-radius:5px;
        font-size:8.5rem;
        text-align:center;    
   }
   & > div span {
       flex:1;
   }
   & > div span:first-child {
       border-right:1px solid #f0f1f3
   }
   & > div span:last-child {
       border-left:1px solid #f0f1f3
   }
  
`;
interface IButton {
    isActive:boolean
}
export const Button = styled.button<IButton>`
       width:100%;
       height:5rem;
       margin-top:2rem;
       display:flex;
       align-items:center;
       justify-content:center;
       border:0;
       border-radius:5px;
       background:${props=> props.isActive ? props.theme.colors.white : props.theme.colors.blue };
       color: ${props=> props.isActive ? props.theme.colors.title :props.theme.colors.white};
       font-weight:600;
       transition:background-color 0.2s;
       :not(:disabled):hover{
         background:${props=> props.isActive ? props.theme.colors.red : props.theme.colors.blueDark };
         color:${props=> props.isActive && props.theme.colors.white};
        }
        :disabled{
             background:${props=> props.theme.colors.white};
              color:${props=> props.theme.colors.text};
              cursor:not-allowed;
              border-bottom:4px solid ${props=>props.theme.colors.green};
              svg{
                margin-left:0.5rem;
                font-size:1.2rem;
                color:${props=> props.theme.colors.green};
              }
        }
`

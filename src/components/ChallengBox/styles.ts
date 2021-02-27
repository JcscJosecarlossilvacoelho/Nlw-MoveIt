import styled from 'styled-components';

export const Container = styled.div`
   height:100%;
   background:${props=> props.theme.colors.white};
   border-radius:5px;
   box-shadow:0 0 40px rgba(0,0,0,0.05);
   padding: 1.5rem 2rem;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   text-align:center;
`;

export const ChallengNotActive = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    strong{
        font-size:1.5rem;
        font-weight:500;
        line-height:1.4rem
    }
    p{
        display:flex;
        flex-direction:column;
        align-items:center;
        line-height:1.4rem;
        max-width:70%;
        margin-top:3rem;    
    }
    p img{
        margin-bottom:3rem;
    }
`

export const ChallengActive = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 100%;

    header{
        color:${props=> props.theme.colors.blue};
        font-weight:600;
        font-size:1.25rem;
        padding: 0 2rem 1.5rem;
        border-bottom:1px solid ${props=> props.theme.colors.grayLine};
    }
    main{
        flex:1;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width: 100%;

        strong{
            font-weight:600;
            font-size:2rem;
            color:${props=> props.theme.colors.title};
            margin: 1.5rem 0 1rem;
        }
        p{
            line-height:1.5rem;
        }
    }
    footer{
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:1rem;
        width: 100%;
        button{
            height:3rem;
            display:flex;
            align-items:center;
            justify-content:center;
            border:0px;
            border-radius:5px;
            color:${props=> props.theme.colors.white};
            font-size:1rem;
            font-weight:600;
            transition:filter 0.2s
        }
        button:hover{
            filter:brightness(0.9);
        }
        button:first-child {
            background:${props=> props.theme.colors.red};     
        }
        button:last-child {
            background:${props=> props.theme.colors.green};    
        }
    }
`
import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    padding: 1rem;
    display: flex;
    flex-direction: column;

`;
export const HeroInfo = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    .text{
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;
export const MainAtributes = styled.body`
   background: ${props => props.theme.colors.background};
   height: auto;
   display: grid;
   grid-template-columns: auto auto auto;
   align-content: center;
   justify-content: center;
   gap: 1rem;

   @media only screen and (min-width: 1000px) {
    display: flex ;
   justify-content: center;
   }

    .atributes{
        width: 110px;
        height: 90px;
        background: #ffae03;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        >h1{
            font-weight: bolder;
        }
        >h6{
            width: 30px;
            height: 30px;
            border-radius: 0.4rem;
            display: flex;
            justify-content: center;
            font-weight: bold;
            border: 3px solid #333;
        }
        >p{

        }
    }
`;
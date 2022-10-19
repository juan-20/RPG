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
    justify-content: center;
    align-items: center;
    gap: 1rem;
    @media only screen and (min-width: 1080px) {
        justify-content: left;
    }
    .image{
        padding: 1rem;
    }
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
export const MainAtributes = styled.section`
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
        background: ${props => props.theme.colors.primary};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        >h1{
            font-weight: bolder;
            font-size: 1rem;
            padding-bottom: 0.5rem;
        }
        >h6{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            width: 30px;
            height: 30px;
            border-radius: 0.4rem;
            display: flex;
            justify-content: center;
            font-weight: bold;
            border: 3px solid ${props => props.theme.colors.text};;
        }
        >p{
            padding-top: 0.5rem;
            font-size: 1rem;
        }
    }
`;

export const SkillsAndLife = styled.section`
    display: flex;
    flex-direction: column;
    background: #d33f49;
    padding: 1rem;
    border-radius: 3px;
    margin-top: 1rem;
    width: 60%;
    align-items: center;
    .skills{
        display: flex;
        flex-direction: column;
        .skill{
            display: flex;
            gap: 1rem;
            .adder{
                width: 9px;
            }
            .name{
                width: 91px;
            }
        }
    }

`;


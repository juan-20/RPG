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
    @media only screen and (max-width: 450px) {
        display: flex;
        flex-direction: column;
        .text{
            padding-bottom: 1rem;
            font-size: 4vw;
        }
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
        max-width: 110px;
        min-width: 10px;
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
        @media only screen and (max-width: 450px) {
            >h1, >h6, >p{
            font-size: 4vw;
            }
        }
    }
`;

export const SkillsAndLife = styled.section`
    display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 1rem;
    padding-top: 1rem;
    margin: auto;
    @media only screen and (max-width: 450px) {
        display: flex;
        flex-direction: column;
    }
    .skills{
        display: flex;
        flex-direction: column;
        background: ${props => props.theme.colors.primary};;
        padding: 1rem;
        border-radius: 5px;

        .title{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
        }
        .skill{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding-top: 0.5rem;
            .adder{
                max-width: 18px;
                min-width: 18px;
            }
            .name{
                max-width: 105px;
                min-width: 15px;
                display: flex;
                word-break: break-all;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
    .life{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        >P{
            font-size: 0.7rem;
        }
        .group-button{
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
        }
    }

`;


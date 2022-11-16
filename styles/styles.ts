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
    flex-direction: column;
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
    .button-group{
        display: flex;
        padding: 1rem;
        gap: 1rem;
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
        max-width: 138px;
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
            padding: 0.5rem 1rem 0.5rem 1rem;

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
            border: 3px solid ${props => props.theme.colors.text};
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	grid-gap: 1rem;
    padding-top: 1rem;

    @media only screen and (min-width: 760px) {
        display: grid;
	    grid-template-columns: 1fr 1fr;     
    }
    .skills{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: ${props => props.theme.colors.primary};
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
            /* min-height: 1rem; */
            /* max-height: 2rem; */
            width: 230px;
            .adder{
                width: 18px;
                width: 18px;
                text-align: center;
            }
            .name{
                width: 120px;
                display: flex;
                word-break: normal;

            }
        }
    }

    .life{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        .test{
            padding-top: 1rem;
            width: 500px;
            height: 300px;
            background: pink;
        }
    }

`;

export const AttacksContainer = styled.section`
    display: grid;
	grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
	grid-gap: 1rem;
    padding-top: 1rem;
    width: 100%;
    @media only screen and (min-width: 511px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .magic{
        width: 100%;
        /* height: 250px; */
    }
`;

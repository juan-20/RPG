import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &-level{
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid ${props => props.theme.colors.text};
            color: ${props => props.theme.colors.text};
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            position: absolute;
            top: 30%;
            transition: 0.08s linear !important;
            span{
                display: none;
            }
            :hover{
                border-radius: 4px;
                width: 6rem;
                content: 'nivel 8';
                cursor: pointer;
                gap: 0.2rem;
                span{
                    display: flex;
                    gap: 0.2rem;
                }
            }
        }
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
   padding-top: 1rem;

   @media only screen and (min-width: 1000px) {
    display: flex ;
   justify-content: center;
   }

    .atributes{
        max-width: 140px;
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
            padding: 0.5rem;
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
    
    @media only screen and (min-width: 650px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        grid-gap: 1rem;
    }


    .skills{
        width: 300px;
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

    .second{
        height: 100%;
        display: flex;
        flex-direction: column;
        /* flex-wrap: wrap; */
        align-content: flex-end;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
    .test{
        width: 300px;
        height: 300px;
        background: pink;
        padding-top: 7rem;
        display: none;
    }

`;

export const AttacksContainer = styled.section`
   
`;

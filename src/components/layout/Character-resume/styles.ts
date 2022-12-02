import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.colors.background};
    border: 3px solid #333;
    border-radius: 8px;
    color: ${props => props.theme.colors.text};
    padding: 1.5rem;
    max-width: 700px;
`;

export const Body = styled.main`
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    .title{
    }
    .register{
            color: ${props => props.theme.colors.text};
            display: flex;
            flex-direction: column;
            align-items:center ;
            justify-content: center;
            padding: 2rem;
            border-radius: 8px;
            h3{
                    padding-bottom: 1rem;
                }
            border: 3px solid ${props => props.theme.colors.text};
        }
    .characters{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0.5rem;
        @media only screen and (max-width: 600px) {
            display: flex;
            flex-direction: column;
        }
    .desc{
        font-size: 1rem;
        padding-bottom: 1rem;
    }
    .btn{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .character-hero{
        display: flex;
        justify-content: center;
        align-items: center;
        .info{
            display: flex;
            flex-direction: column;
            align-items: center  ;
            .name{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.8rem;
                font-weight: bold;
            }
            .role-age{
                display: flex;
            }
        }   
    }
}
`;
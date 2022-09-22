import styled from "styled-components";

export const Container = styled.div`
    background: #ffae03;
    padding: 1.5rem;
`;

export const Body = styled.main`
    background: #5762d5;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    text-align: center;
    @media only screen and (max-width: 600px) {
            flex-direction: column;
        }
    .desc{
        font-size: 1rem;
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
                font-weight: bold;
            }
            .role-age{
                display: flex;
            }
        }   
    }
`;
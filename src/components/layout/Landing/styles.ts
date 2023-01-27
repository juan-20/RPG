import styled  from "styled-components";

export const LandingPageComponent = styled.div`
    display: flex;
    background: ${props => props.theme.colors.primary};
    flex-direction: column;
    .hero-text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 210px;
        color: ${props => props.theme.colors.text};
        font-family: 'Montserrat';
        gap: 1rem;
        >p{
            padding: 1rem;
            font-weight: 400;
        }
    }

.hero-image{
    height: 400px;
    display: flex;
    justify-content: center;
    .shadow{
        background: ${props => props.theme.colors.titleLight};
        height: 350px;
        /* mobile: */
        border-radius: 30% 70% 36% 64% / 65% 30% 70% 35% ;
        width: 40%;
        @media only screen and (max-width: 800px) {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70% ;
            width: 1000%;
        }
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
`;

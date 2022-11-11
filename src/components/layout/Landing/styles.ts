import styled  from "styled-components";

export const LandingPageComponent = styled.div`
    display: flex;
    flex-direction: column;
    .hero-text{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
 background: #d33f49;
 height: 210px;
 color: #F8E5EE;
 font-family: 'Montserrat';
}

.hero-image{
    background-color: #d33f49;
    height: 400px;
    display: flex;
    justify-content: center;
    .shadow{
        background: #FFAE03;
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
export const CharactersResume = styled.div`
    height: 100vh;
    background: #5762D5;
`;
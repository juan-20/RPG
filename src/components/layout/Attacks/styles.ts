import styled from "styled-components";

export const Container = styled.div`
    /* padding: 1rem; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .choose{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        overflow: hidden;
        &-slider{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 3rem;
           flex-direction: row;
           overflow-x: auto;
           overflow-y: hidden;
           height: 40px;
           width: 100vw;
           white-space: nowrap;
           -ms-overflow-style: none;
            scrollbar-width: none;
            scroll-behavior: smooth;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
            text-align: center;
            
            @media only screen and (min-width: 767px) {
                align-items: center;
                justify-content: center;
                width: 100%;
            }
            ::-webkit-scrollbar {
                display: none;
            }
            &-levels{
                /* display: flex; */
                border: none;
            }
        }
    }
    
    .attacks-container{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    width: 100%;
    gap: 1rem;
    &-response{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media only screen and (min-width: 511px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .magic{
        width: 100%;
        /* height: 250px; */
    }
    @media only screen and (max-width: 550px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    @media only screen and (min-width: 551px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
    }
    @media only screen and (min-width: 1440px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1rem;
    }
    }
`; 
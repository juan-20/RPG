import styled from "styled-components";

export const Container = styled.div`
    /* padding: 1rem; */
    width: 100%;
    display: flex;
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
            gap: 0.5rem;
            padding: 3rem;
           flex-direction: row;
           overflow-x: auto;
           height: 40px;
           width: 100vw;
           white-space: nowrap;
           -ms-overflow-style: none;
            scrollbar-width: none;
            scroll-behavior: smooth;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
            
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
`; 
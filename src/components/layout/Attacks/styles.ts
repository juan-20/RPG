import styled from "styled-components";

export const Container = styled.div`
    /* padding: 1rem; */
    .choose{
        display: flex;
        gap: 1rem;
        &-slider{
            gap: 0.5rem;
           display: flex;
           flex-direction: row;
           overflow-x: auto;
           height: 40px;
           width: 17rem;
           white-space: nowrap;
           -ms-overflow-style: none;
            scrollbar-width: none;
            scroll-behavior: smooth;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
            
            @media only screen and (min-width: 374px) {
                width: 20rem;
            }
            @media only screen and (min-width: 424px) {
                width: 25rem;
            }
            @media only screen and (min-width: 767px) {
                width: 100%;
            }
            ::-webkit-scrollbar {
                display: none;
            }
            &-levels{
                display: flex;
            }
        }
    }
`; 
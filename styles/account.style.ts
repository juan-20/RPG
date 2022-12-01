import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    overflow-x: hidden;
    .hero{
        background: ${props => props.theme.colors.primary};
        padding-top: 3rem;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-bottom: 3rem;
        display: flex;
        gap: 2rem;
        &-image{
            border-radius: 50%;
        }
        h1{
            display: flex;
            justify-content: center;
            align-items: center;
            padding-bottom: 3rem
        }
        &-exit{

        }
    }
    .characters{
        height: 100vh;
        &-showButton{
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 5rem;
            &-visible{
                backdrop-filter: blur(100px);
                z-index: 999;
                position: absolute;
            }
            .characters-link-card{
                display: flex;
                gap: 1rem;
                filter: blur(10px);
                &-content{
                :hover{
                    background: ${props => props.theme.colors.primary};
                    cursor: not-allowed;
                }
            }
            }
        }
        &-link{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            text-align: left;
            padding-left: 2rem;
            padding-right: 2rem;
            gap: 1rem;
            
            padding-top: 5rem;

            &-slider{
                display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 3rem;
           flex-direction: row;
           overflow-x: auto;
           overflow-y: hidden;
           height: 200px;
           width: 100vw;
           white-space: nowrap;
           -ms-overflow-style: none;
            scrollbar-width: none;
            scroll-behavior: smooth;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
            text-align: center;
                &-card{
                    display: flex;
                    gap: 1rem;
                    &-content{
                        padding: 1rem;
                        background: ${props => props.theme.colors.primary};
                        border-radius: 8px;
                        :hover{
                            background: ${props => props.theme.colors.background};
                            outline: 1px solid ${props => props.theme.colors.text};
                            border-radius: 8px;
                            cursor: pointer;
                    }
                }
                }
            }
        }
    }
`;
import styled from "styled-components";

interface ToggleProps{
    isAllowed: string
}

export const Container = styled.button<ToggleProps>`
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        all: unset;
        /* height: 100%; */
        color: ${props => props.theme.colors.text};
        
        :hover{
            cursor: pointer;
        }
        
        :focus{
            transition: 0.00s linear !important;
            border: none;
            
            .toggle{
                &-level{
                    border-radius: 50%;
                    outline: 1px solid ${props => props.theme.colors.titleLight};
                    >svg{
                    color: ${props => props.theme.colors.titleLight};
                    fill: ${props => props.theme.colors.titleLight};
                        >path{
                            stroke: ${props => props.theme.colors.titleLight};
                        }
                        .number{
                            fill: ${props => props.theme.colors.titleLight} !important;
                            font-weight: bolder;
                        }
                    }
                }
                &-icon{
                    outline: 1px solid ${props => props.theme.colors.titleLight};
                outline-offset: 1px;
                >i{
                    color: ${props => props.theme.colors.titleLight};
                }
                    >p{
                        color: ${props => props.theme.colors.titleLight};

                    }
            }
            }        
        }

        .toggle{
            &-level{
                display: flex;
                align-items: center;
                justify-content: center;
                >svg{
                    color: ${props => props.theme.colors.text};
                    fill: ${props => props.theme.colors.text};
                    >path{
                        stroke: ${props => props.theme.colors.text};
                    }
                    .number{
                        fill: ${props => props.theme.colors.text} !important;
                        font-weight: bolder;
                    }
                }


            }


            &-icon{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                /* outline: 1px solid ${props => props.theme.colors.titleLight}; */
                padding: 0.5rem;
                border-radius: 5px;
                :hover{
                    /* color: ${props => props.theme.colors.titleLight}; */
                }
     
        }
        }
    
`;
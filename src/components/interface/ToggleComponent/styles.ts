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
        height: 100%;
        color: ${props => props.theme.colors.text};
        :focus{
            outline: 1px auto ${props => props.theme.colors.titleLight};;
            .toggle-level{
            >svg{
                fill: ${props => props.theme.colors.text}; 
                >path{
                    stroke: ${props => props.theme.colors.titleLight};
                }
                
            }
        }
        }
        :hover{
            cursor: pointer;
            .toggle-level{
                    >svg{
                        fill: ${props => props.theme.colors.text}; 
                        >path{
                            stroke: ${props => props.theme.colors.titleLight};
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
                    border-radius: 50%;
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
                outline: 1px solid ${props => props.theme.colors.text};
                padding: 0.5rem;
                /* border-radius: 5px; */
                :hover{
                    color: ${props => props.theme.colors.titleLight};
                }
                :focus{
                    >p{
                        color: ${props => props.theme.colors.titleLight};

                    }
                }
        }
        }
    
`;
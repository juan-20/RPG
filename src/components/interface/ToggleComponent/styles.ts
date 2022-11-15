import styled from "styled-components";

interface ToggleProps{
    isAllowed: string
}

export const Container = styled.section<ToggleProps>`
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .toggle{
            &-level{
                display: flex;
                align-items: center;
                justify-content: center;
                :hover{
                    >svg{
                        outline: 1px solid #333;
                        color: ${props => props.theme.colors.titleLight};
                        fill: ${props => props.theme.colors.titleLight};
                        outline: 2px solid  ${props => props.theme.colors.text};
                    }
                }
                :focus{
                    >svg{
                        outline: 3px solid orange;    
                    }
                }
                >svg{
                    border-radius: 50%;
                    color: ${props => props.theme.colors.text};
                    fill: ${props => props.theme.colors.text};
                }
            }
            &-icon{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                border: 1px solid #fff;
                padding: 0.5rem;
                border-radius: 5px;
                :hover{
                outline: 1px solid #333;
                color: ${props => props.theme.colors.titleLight};
                outline: 2px solid  ${props => props.theme.colors.text};

            }
        }
        }
    
`;
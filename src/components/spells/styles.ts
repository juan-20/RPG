import styled from "styled-components";

export const Spells = styled.div`
    border: 1px solid ${props => props.theme.colors.text};
    padding: 1rem;
    >header{
        display: flex;
        flex-direction: column;
        .subHead{
            border-bottom: 1px solid ${props => props.theme.colors.text};
            display: flex;
            justify-content: center;
            padding: 1rem;
            display: flex;
            gap: 10px;
            p{
                font-size: 1rem ;
                color: ${props => props.theme.colors.textSecondary};
            }
        }
    }
`;
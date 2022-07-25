import styled from "styled-components";

export const Spells = styled.div`
    width: 400px;
    border: 1px solid ${props => props.theme.colors.text};
    padding: 1rem;
    >head{
        display: flex;
        flex-direction: column;
        >h1{
            font-size: 1.5rem ;
            padding-bottom: 3rem;
            border-bottom: 1px solid ${props => props.theme.colors.text};
            padding-top: 1rem;
        }
        .subHead{
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
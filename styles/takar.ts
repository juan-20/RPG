import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    
    padding-top: 1rem;
    
    
    
    .spells-section{
        display: flex;
        flex-direction: column;
        &-header{
            padding: 1rem;
            background: ${props => props.theme.colors.background};
            color: ${props => props.theme.colors.text};
            font-size: 1.3rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid ${props => props.theme.colors.text};
        }
    }
    .content{
        padding: 1rem;
    }
    #magics, #invocation, #skills, #tresure, #life{
        padding: 1rem;
    }
    .spells{
        padding: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        overflow: auto;
        gap: 10px;

        @media only screen and (max-width: 926px) {
            display: flex;
        justify-items: center;
        }
    }
    .skills{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        padding: 1rem;
        justify-items: center;
        overflow: auto;
        border: 1px solid ${props => props.theme.colors.text};
        }
`;

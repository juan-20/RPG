import styled from "styled-components";


export const LifeMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;

    >p{
       color: ${props => props.theme.colors.text}
    }
    >button{
        margin-top: 1rem;
        margin-bottom: 1rem;
        width: 10rem;
        height: 2rem;
        border-radius: 5px;
        color: #333;
    }

    .life-h1{
        padding: 1rem;
    }

    .heart{
        display: flex;
        align-items: center;
        gap: 1rem;
        >span{
            /* color: ${props => props.theme.colors.textSecondary} */
        }
        
    }

`;
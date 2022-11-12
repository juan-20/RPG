import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.colors.primary};
    padding: 1rem;
    border-radius: 5px;
    height: 250px;

        .fire{
            color:  ${props => props.theme.colors.secondary};
        }
        .sword{
                color:  ${props => props.theme.colors.titleDark};
                /* color: #5762d5; */
            }
    .magic{
        padding: 1rem;
        &-header{
            height: 60px;
            display: flex;
            justify-content: space-between;
        }
        &-content{
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        &-button{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            &-prepered{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.3rem;
            }
        }
 
    }
`;
import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.colors.primary};
    padding: 1rem;
    border-radius: 5px;
    max-height: 250px;
    min-height: 200px;

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
            justify-content: flex-end;
            height: 100%;
        }
 
    }
`;
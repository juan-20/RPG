import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.colors.primary};
    padding: 1rem;
    border-radius: 5px;
    
    .magic{
        padding: 1rem;
        &-header{
            display: flex;
            justify-content: space-between;
            .fire{
                :hover{    
                    color: #d33f49;
                }
            }
        }
        &-content{
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
        &-button{
            display: flex;
            justify-content: flex-end;
        }
 
    }
`;
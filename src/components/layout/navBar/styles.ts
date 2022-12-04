import styled from 'styled-components';

export const Container = styled.div`
    
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    
    >nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 3rem;
        box-sizing: border-box;
        padding: 2rem;
        border-bottom: 1px solid ${props => props.theme.colors.text};
        .world-informations{
            gap: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            >h1{
                cursor: pointer;
            }
            :focus{
            box-shadow: 0 0 0 2px #5762d5;
             }
        }
        .characters{
            gap: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 100%;
            >svg{
                cursor: pointer;
            }
            >img{
                border-radius: 50%;
            }
            >a{
                color: ${props => props.theme.colors.text};
            }
        }
    }
`;

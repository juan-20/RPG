import styled from 'styled-components';

export const Container = styled.div`
    background: #d33f49;
    
    >nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 3rem;
        width: 100%;
        color: #fff;
        padding: 2rem;
        .world-informations{
            gap: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            >h1{
                cursor: pointer;
            }
        }
        .characters{
            gap: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            >svg{
                cursor: pointer;
            }
        }
    }
`;

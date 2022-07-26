import styled from 'styled-components';

export const Container = styled.div`
    background: #333;
    
    >nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 3rem;
        width: 100%;
        .world-informations{
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .characters{
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
    }
`;

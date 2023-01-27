import styled from "styled-components";

export const Container = styled.body`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
    min-height: 100%;
    background: purple;
    .login{
        display: flex;
        justify-content: center;
        align-items: center;
        >button{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px;
            gap: 24px;
            >p{
                font-size: 14px;
                font-family: 'Roboto', sans-serif;
                color: #0000 / 0,0,0 (54%),
            }
        }
    }
`;
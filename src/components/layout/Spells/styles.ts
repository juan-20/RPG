import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 2rem;
    border-bottom: 1px solid ${props => props.theme.colors.titleDark};
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem;
        background: ${props => props.theme.colors.titleDark};
        div{
            p{
                @media only screen and (max-width: 450px) {
                font-size: 10px;
                }
            }
        }
        h2{
            @media only screen and (max-width: 450px) {
                font-size: 16px;
            }
        }
        &-school{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }
    }
    .content{
        &-header{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            height: 30px;
            border-bottom: 1px solid ${props => props.theme.colors.titleDark};
            @media only screen and (max-width: 580px) {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                height: auto;
                justify-content: center;
            }
            @media only screen and (max-width: 450px) {
                display: grid;
                grid-template-columns: 1fr 1fr;
                height: auto;
                justify-content: center;
            }
            &-item{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
            }
        }
        &-body{
         &-material{
            display: flex;
            gap: 0.5rem;
            padding-top: 1rem;
            padding-bottom: 1rem;
            span{
                font-weight: bolder;
            }
         }
        }
    }
`;

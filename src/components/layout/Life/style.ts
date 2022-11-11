import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        border-radius: 5px;
        background: ${props => props.theme.colors.primary};
        padding: 1rem;
        width: 80%;
        position: relative;
        h1{
            padding: 0.5rem;
        }
        .heart{
            animation: pulse 2s linear infinite;
        }
        .life{
            position: absolute;
            top: 35%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
        }
        p{
            font-size: 0.7rem;
            padding-bottom: 1rem;
            display: flex;
            justify-content: center;
        }
        .changeLife{
            padding: 1rem;
            border: 1px solid ${props => props.theme.colors.text};;
            border-radius: 5px;
        .inputSection{
            display: flex;
            gap: 0.7rem;
            justify-content: center;
            align-items: center;
            input{
                width: 40px;
                background: #fff;
                color: #8696a0;
                border: 1px solid #000;
                border-radius: 4px;
                height: 30px;
                padding: 4px;
                text-align: center;
            }
        }
        .group-button{
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
            color: ${props => props.theme.colors.text};
            padding-top: 1rem;
        }
        }

        @keyframes pulse {
	0% {
		transform: scale(1);
	}
	
	10% {
		transform: scale(1.1);
	}
	
	20% {
		transform: scale(0.9);
	}
	
	30% {
		transform: scale(1.2);
	}

	40% {
		transform: scale(0.9);
	}

	50% {
		transform: scale(1.05);
	}

	60% {
		transform: scale(0.95);
	}

	70% {
		transform: scale(1);
	}
}
`;
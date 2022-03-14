import styled from 'styled-components';

export const Container = styled.div`
    

.atribute{
    display: flex;
    flex-direction : row ;
    align-items: left;
    justify-content: center;
    gap: 2rem ;
    margin-bottom: 5rem;
}

.skills{
    display: flex;
    flex-direction : row ;
    align-items: left;
    justify-content: center;
    gap: 2rem ;
    margin-bottom: 5rem;
}
.skills-especific{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
    margin-bottom: 5rem;
}
`;

export const AttributeSquare = styled.div`
    border: 1px solid #333;
    border-radius: 15px;
    display: flex;
    flex-direction: column ;
    align-items: center;
    width: 10rem ;
    padding: 1rem;
    >h1{
        font-size: 1.5rem ;
    }
    
    p{
        font-size: 3rem ;
        color: #565964;
    }
    
        span{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px ;
        width: 2rem ;
        height: 2rem ;
        border: 1px solid #333;
    }
    
`;

export const Life = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-bottom: 5rem;
    
    >input:first-of-type{
        margin-bottom: 5rem;
        position: absolute;
        font-size: 2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        width: 2.5rem;
        background: none;
    }
`;
export const Caracteristics = styled.div`
   border: 1px solid #333;
    border-radius: 15px;
    display: flex;
    flex-direction: column ;
    align-items: center;
    justify-content: center;
    width: 15rem ;
    text-align: center;
    padding: 1rem;
    >h1{
        font-size: 1.5rem ;
    }
    
    p{
        font-size: 3rem ;
        color: #565964;
    }
    
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px ;
        width: 2rem ;
        height: 2rem ;
        border: 1px solid #333;
    }
    `;

export const Skills = styled.div`

border: 1px solid #333;
    border-radius: 15px;
    display: flex;
    flex-direction: column ;
    align-items: center;
    justify-content: center;
    width: 10rem ;
    text-align: center;
    padding: 1rem;
    >h1{
        font-size: 1.5rem ;
    }
    
    p{
        font-size: 3rem ;
        color: #565964;
    }
    
    span{
        font-size: 1rem ;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #565964;
        font-weight: bold;
        width: 2rem ;
        height: 2rem ;
    }

`;
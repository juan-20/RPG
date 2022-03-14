import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 1rem;

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
@media only screen and (max-width: 600px) {
    .skills-especific{
        grid-template-columns: 1fr 1fr;
    }

}

.spells{
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    &-title{
        display: flex;
        align-items: left;
        justify-content: center;
        padding: 3rem;
        gap: 2rem ;
        
    }
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
    .description{
        margin-top: 1rem;
    }
        span{
        border-radius: 20px ;
        width: 2rem ;
        height: 2rem ;
        border: 1px solid #333;
        font-weight: bold;
    }

    
`;

export const Life = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-bottom: 5rem;
   
    .heart{
        display: flex;
        align-items: center;
        gap: 1rem;
    >input:first-of-type{
        font-size: 2rem;
        width: 2.5rem;
    }
}
    
    >button{
        margin-top: 1rem;
        margin-bottom: 1rem;
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

export const Spells = styled.div`
    
    border: 1px solid #333;
    border-radius: 15px;
    display: flex;
    flex-direction: column ;
    align-items: center;
    justify-content: center;
    width: 90vw ;
    text-align: center;
    padding: 1rem;
    margin-bottom: 5rem;
    >h1{
        font-size: 1.5rem ;
        padding-bottom: 3rem;
    }
    
    p{
        font-size: 1rem ;
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
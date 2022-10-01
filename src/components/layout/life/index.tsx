import { Button, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import { LifeMain } from './styles'
import { toast } from 'react-toastify';

export default function Life({startLife, character}: any ) {
    let lifeLocal
    getlocalStorage()
    function getlocalStorage(){
        if (typeof window !== 'undefined'){
        lifeLocal = localStorage.getItem('@'+ character+ '_health');
        if(lifeLocal)startLife=lifeLocal
        }
    }
    const [damage, setDamage]: any = useState();
  
    const [life, setLife]: any = useState(startLife);
  return (
    <LifeMain>

        <Heading className='life-h1'>Vida</Heading>
    <div className="heart">
        <Input
         value={damage}
         onChange={event => setDamage(event.target.value)}
         placeholder={'0-'+startLife}
         htmlSize={4} width='auto' />
        
        <span> Vida: {life} </span>
        
    </div>
    
    <p>7d8 = {startLife}</p>

    <Button colorScheme='red'
        onClick={() => {
            const lifeLocal: any = localStorage.getItem('@'+ character+ '_health');
            console.log("Você levou: ", damage, " de dano");
            if (lifeLocal < 0) {
                toast.error('Você caiu camarada', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            if (lifeLocal) {
                let lifeDamaged: number = lifeLocal - damage;
                localStorage.setItem('@'+ character+ '_health', lifeDamaged.toString());
                toast.warn(({ data }) => `Essa doeu. Agora está com ${data} de vida`, {
                    data: lifeDamaged,
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                const updatedLife = lifeDamaged
                setLife(updatedLife)
             
            } else {
                let lifeDamaged: number = life - damage;
                localStorage.setItem('@'+ character+ '_health', lifeDamaged.toString())

                toast.warn("Tomou seu primeiro dano :(", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                const updatedLife = lifeDamaged
                setLife(updatedLife)
            }
        }}>
        Tomar dano
    </Button>

    <Button colorScheme='whatsapp'
        onClick={() => {
            let lifeDamaged: any = startLife;
            lifeDamaged = localStorage.setItem('@'+ character+ '_health', lifeDamaged)
            setLife(54)

            toast.success('Dormiu e recuperou sua vida.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }}>
        Descanso longo
    </Button>
</LifeMain>
  )
}

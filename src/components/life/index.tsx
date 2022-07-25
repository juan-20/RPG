import { Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import { BsHeart } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { LifeMain } from './styles'

export default function Life({startLife}: any) {
    const [damage, setDamage]: any = useState();
    const [life, setLife]: any = useState(startLife);
  return (
    <LifeMain>
    <h1>Ponto de vida máximo: {startLife}</h1>
    <div className="heart">
        <BsHeart size={64} color="red">
        </BsHeart>
        <span>Dano:</span>
        <Input
         value={damage}
         onChange={event => setDamage(event.target.value)}
         placeholder={'0-'+startLife}
        htmlSize={4} width='auto' />
        
        <span> Vida: {life} </span>

    </div>
    <p>7d8</p>

    <button
        className='damage'
        onClick={() => {
            const lifeLocal: any = localStorage.getItem('health');
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
                localStorage.setItem('health', lifeDamaged.toString());
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
                console.log(life)
            } else {
                let lifeDamaged: number = life - damage;
                console.log(lifeDamaged);
                localStorage.setItem('health', lifeDamaged.toString())

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
                console.log(life)
            }
        }}>
        Tomar dano
    </button>

    <button
        className='sleep'
        onClick={() => {
            let lifeDamaged: any = startLife;
            lifeDamaged = localStorage.setItem('health', lifeDamaged)
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
    </button>
</LifeMain>
  )
}

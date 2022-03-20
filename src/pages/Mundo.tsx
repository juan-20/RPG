import Image from 'next/image';
import React from 'react';

import { Container } from '../../styles/mundo';

import mapa from '../../assets/mapa.png'

const Mundo: React.FC = () => {
    return (
        <Container>
            <Image src={mapa} alt="" />
        </Container>
    );
}

export default Mundo;
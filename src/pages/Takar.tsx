import { InferGetStaticPropsType } from 'next/types';
import React, { useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import { BiDownArrow } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, } from '../../styles/takar';
import Spells from '../components/spells';
import { SpellsType } from '../types/Takar.type';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import Life from '../components/life';

export default function Takar({spells}: InferGetStaticPropsType<typeof getStaticProps>) {

    const [damage, setDamage]: any = useState();
    const [life, setLife]: any = useState(54);


    return (
        <Container>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />


           <main>

            PP = 7 | PO = 24 || PL = 2
        
        <Life startLife={54}/>

          
          

        
            <Accordion allowToggle>
                <AccordionItem>
                <h2>
                <AccordionButton className='spells-section-header'>
                    <Box flex='1' textAlign='left'>
                    Magias
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                     <div id='spells' className="spells">
                    {spells.map((spell: SpellsType) => (
                    <Spells spells={spell} key={1} />
                    ))}
                    </div>
                    </AccordionPanel>
            </AccordionItem>
            </Accordion>

            </main>

        </Container >
    );
}

export const getStaticProps = async () => {
    let host = process.env.ENVIROMENT
    let url
    if (host === 'dev'){
        url = 'http://localhost:3000'
    }else{
        url = 'https://aeternat-o97dhu0sc-juan-20.vercel.app/'
    }
    const res = await fetch(url + '/api/magic')
    const spells: SpellsType[] = await res.json()
    return{
      props:{
        spells,
      }
    }
    
  }
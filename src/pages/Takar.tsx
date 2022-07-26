import { InferGetStaticPropsType } from 'next/types';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, } from '../../styles/takar';
import Spells from '../components/spells';
import { InvocationType, skillsType, SpellsType, TakarType } from '../types/Takar.type';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import Life from '../components/life';
import Invocation from '../components/invocation';
import Skills from '../components/skills';

export default function Takar({Takar}: InferGetStaticPropsType<typeof getStaticProps>) {
    let spells = Takar.magic
    let invocation = Takar.invocation
    let skills = Takar.skills

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
        
        <Life startLife={54} character='Takar'/>

            <Accordion id='magics' allowToggle>
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
                    <Spells spells={spell} key={spell.id} />
                    ))}
                    </div>
                    </AccordionPanel>
            </AccordionItem>
            </Accordion>


            <Accordion id='invocation' allowToggle>
                <AccordionItem>
                <h2>
                <AccordionButton className='spells-section-header'>
                    <Box flex='1' textAlign='left'>
                    Invocações
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                     <div id='spells' className="spells">
                   

            {invocation.map((invocations: InvocationType) => (
            <Invocation invocation={invocations} key={invocations.id}/>
            ) )}
                    </div>
                    </AccordionPanel>
            </AccordionItem>
            </Accordion>

            <Accordion id='skills' defaultIndex={[0]} allowToggle>
                <AccordionItem>
                <h2>
                <AccordionButton className='spells-section-header'>
                    <Box flex='1' textAlign='left'>
                    Invocações
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                     <div id='spells' className="spells">
                   

            {skills.map((skill: skillsType) => (
            <Skills skills={skill} key={skill.id} />
            ) )}
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
    const res = await fetch(url + '/api/Takar')
    const Takar: TakarType = await res.json()
    return{
      props:{
        Takar,
      }
    }
    
  }
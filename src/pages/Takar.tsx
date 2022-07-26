import { InferGetStaticPropsType } from 'next/types';
import { Container } from '../../styles/takar';
import Spells from '../components/spells';
import { InvocationType, skillsType, SpellsType, TakarType } from '../types/Takar.type';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import Image from 'next/image'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Life from '../components/life';
import Invocation from '../components/invocation';
import Skills from '../components/skills';
import Tresure from '../components/tresure';
import Speels from '../components/spells';

export default function Takar({Takar}: InferGetStaticPropsType<typeof getStaticProps>) {
    let spells = Takar.magic
    let invocation = Takar.invocation
    let skills = Takar.skills

    return (
        <Container>
                  <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
           <main>
            <div className="content">
           <Image src={Takar.photo[0].url} width='250px' height='300px' ></Image>
           <p>{Takar.name}</p>
           <p>{}</p>
           </div>
           <Accordion id='skills' defaultIndex={[0]} allowToggle>
                <AccordionItem>
                <h2>
                <AccordionButton className='spells-section-header'>
                    <Box flex='1' textAlign='left'>
                    Atributos
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                        <div className="skills">
                        {skills.map((skill: skillsType) => (
                        <Skills skills={skill} key={skill.id} />
                        ) )}
                        </div>
                    </AccordionPanel>
            </AccordionItem>
            </Accordion>


            <Accordion id='life' defaultIndex={[0]} allowToggle>
                <AccordionItem>
                <h2>
                <AccordionButton className='spells-section-header'>
                    <Box flex='1' textAlign='left'>
                    Vida
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>        
                        <Life startLife={54} character='Takar'/>
                    </AccordionPanel>
            </AccordionItem>
            </Accordion>
        
            <Accordion id='tresure'  allowToggle>
                <AccordionItem>
                <h2>
                <AccordionButton className='spells-section-header'>
                    <Box flex='1' textAlign='left'>
                    Tesouro
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>        
                        <Tresure coins='PP = 7 | PO = 24 || PL = 2'/>
                    </AccordionPanel>
            </AccordionItem>
            </Accordion>
        

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
                    <Speels spells={spell} key={spell.id} />
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

    
            </main>

        </Container >
    );
}

export const getStaticProps = async () => {
   let url = process.env.ENVIROMENT
    const res = await fetch(url + '/api/Takar')
    const Takar: TakarType = await res.json()
    return{
      props:{
        Takar,
      }
    }
    
  }
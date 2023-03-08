import React, { useEffect, useState } from 'react';
import { SpellsProps } from '../../types/D&D.type';
import SpellsCard from '../../components/layout/Spells/SpellsCard';
import { Container } from '../../../styles/spells.style';
import Head from 'next/head';
import {MdKeyboardBackspace} from 'react-icons/md'
import { equalTo, onValue, orderByChild, query, ref } from 'firebase/database';
import { db } from '../../services/firebase';
import { useRouter } from "next/router";
import Link from 'next/link';
import { CircleNotch } from 'phosphor-react';
import { GetServerSideProps, GetStaticPaths } from 'next/types';

export default function SpellsName({AllSpells}: any) {
  const router = useRouter();
  const { spellName }: any = router.query;

  const [allSpellLoaded, setallSpellSLoaded] = useState<SpellsProps[]>(Object.values(AllSpells))
  console.log(AllSpells);
  console.log(allSpellLoaded);

  // useEffect(() => {
  //   if(spellName === undefined)return
  //   fetch(`https://rpg-73e66-default-rtdb.firebaseio.com/spells.json?orderBy="SpellName"&equalTo="${spellName}"`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setallSpellSLoaded(Object.values(data))
  //     console.log(allSpellLoaded)
  //   })
  // }, [spellName])


  return (
    <Container className="OneSpell">
       <Head>
            <title>Magias</title>
            <meta name='description' content='Lista de todas magias de D&D 5e' />
            <meta property='og:title' content='Magias D&D' />
            <meta property='og:description' content='Lista de todas magias de D&D 5e' />
            <meta property='og:type' content='website' />
            <meta property="og:image" content={`${process.env.REACT_APP_ENVIROMENT}/api/og?title=${spellName}&image=wand`} />
            <meta name="twitter:image" content={`${process.env.REACT_APP_ENVIROMENT}/api/og?title=${spellName}&image=wand`}></meta>
        </Head>
        <div className="main-header">
          <h1>Magias</h1>
          <div className="input">
            

          </div>
            <div className="autocomplete">
          </div>
        </div>
        <div className="back">
        <Link href={'/spells'}>
          <div className="content">
                <MdKeyboardBackspace />
              <h3>
                Voltar
              </h3>
              </div>
        </Link>
        </div>
          
        <div className="content">
          {allSpellLoaded ? 
          <>
         {allSpellLoaded.map((a: SpellsProps, i) => (
          <SpellsCard  
              Concentration={a.Concentration}
              Description={a.Description}
              Duration={a.Duration}
              Level={a.Level}
              Material={a.Material}
              Reach={a.Reach}
              Ritual={a.Ritual}
              School={a.School}
              Somatic={a.Somatic}
              SpellName={a.SpellName}
              Time={a.Time}
              Verbal={a.Verbal}
              key={i}
          />
        ))}
        </>
        : 
        <div className="center">
          <p>Carregando...</p>
          <CircleNotch size={24} weight="fill" />
        </div>
        }
        </div>
    </Container>
  );
}

type routes ={
  params:{
      spellName: string
  }
}

export async function getStaticProps(name: routes) {

    const res = await fetch(`https://rpg-73e66-default-rtdb.firebaseio.com/spells.json?orderBy="SpellName"&equalTo="${name.params.spellName}"`)
    const AllSpells: SpellsProps[] = await res.json();

    return{
      props:{
      AllSpells,
      fallback: false
      }
    }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

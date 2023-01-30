import React, { useEffect, useState } from 'react';
import { SpellsProps } from '../../types/D&D.type';
import SpellsCard from '../../components/layout/Spells/SpellsCard';
import { Container } from '../../../styles/spells.style';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { SpellName } from '../api/data/spellName';
import {MdKeyboardBackspace} from 'react-icons/md'
import SearchInput from '../../components/interface/custom-input';
import { equalTo, onValue, orderByChild, query, ref } from 'firebase/database';
import { db } from '../../services/firebase';
import Link from 'next/link';
import { GetStaticPaths } from 'next';

export default function SpellsName({AllSpells}: any) {

    const [search, setSearch] = useState('')
    const [allSpellLoaded, setallSpellSLoaded] = useState<SpellsProps[]>(AllSpells)
    const router = useRouter();
    const { spellName }: any = router.query;
    console.log(allSpellLoaded);

    // useEffect(() => {
  
    //   const newSpell = query(ref(db, "/spells"),
    //   orderByChild('SpellName'), 
    //   equalTo(spellName),
    //   );
    //   onValue(newSpell, (snapshot) => {
    //     const data = snapshot.val();
    //     setallSpellSLoaded(Object.values(data))
    //    })

    // }, [router.asPath])
    


  return (
    <Container className="OneSpell">
       <Head>
            <title>Magias</title>
            <meta name='description' content='Lista de todas magias de D&D 5e' />
            <meta property='og:title' content='Magias D&D' />
            <meta property='og:description' content='Lista de todas magias de D&D 5e' />
            <meta property='og:type' content='website' />
            <meta property="og:image" content='🪄' />
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
          
        </div>
    </Container>
  );
}

type routes ={
    params:{
        spellName: string
    }
  }

  export async function getStaticProps (name: routes) {
    let AllSpells: SpellsProps[] | undefined
    try{
      const newSpell = await query(ref(db, "/spells"),
      orderByChild('SpellName'), 
      equalTo(name.params.spellName),
      );
      onValue(newSpell, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        AllSpells = (Object.values(data))
       })
    }catch(err){
      console.log('ups')
    }

    // const res = await fetch(`${process.env.REACT_APP_SSR}/api/getSpellsByName/${name.params.spellName}`);
  
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
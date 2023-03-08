import React, { useState } from 'react';
import { GetServerSideProps, GetStaticPaths, InferGetStaticPropsType } from 'next'
import { SpellsProps } from '../../types/D&D.type';
import SpellsCard from '../../components/layout/Spells/SpellsCard';
import { Container } from '../../../styles/spells.style';
import Head from 'next/head';
import { endAt, onValue, orderByKey, query, ref, startAt } from 'firebase/database';
import { db } from '../../services/firebase';
import { CircleNotch, MagnifyingGlass } from 'phosphor-react';
import { SpellName } from '../api/data/spellName';
import SearchInput from '../../components/interface/custom-input';

export default function Spells({AllSpells}:  InferGetStaticPropsType<typeof getServerSideProps>) {

    console.log(AllSpells);

    const [lastSpellLoaded, setLastSpellSLoaded] = useState(50)
    const [isLoading, setIsLoading] = useState(false)
    const [allSpellLoaded, setallSpellSLoaded] = useState<SpellsProps[]>(Object.values(AllSpells))
    const [search, setSearch] = useState('')
    const [resultSearch, setResultSearch] = useState(SpellName)

    console.log(allSpellLoaded);


    async function LoadMore(){
      setIsLoading(true)
      const newSpell = await query(ref(db, "/spells"), 
      orderByKey(), 
      startAt(String(lastSpellLoaded+1)), 
      endAt(String(lastSpellLoaded+50)) 
      );
      onValue(newSpell, (snapshot) => {
        const data: SpellsProps = snapshot.val();
        let arrData: any =  Object.values(data)
        
        setallSpellSLoaded([...allSpellLoaded, ...arrData])
        setIsLoading(false)
      })
      setLastSpellSLoaded(lastSpellLoaded+50);
    }
    function handleSeach(e: any){
      setSearch(e.target.value)
      search.toLocaleLowerCase();
      setResultSearch(SpellName.filter(w => w.toLowerCase().includes(search)).map(w => w).slice(0,5))
    }
  return (
    <Container className="">
       <Head>
            <title>Magias</title>
            <meta name='description' content='Lista de todas magias de D&D 5e' />
            <meta property='og:title' content='Magias D&D' />
            <meta property='og:description' content='Lista de todas magias de D&D 5e' />
            <meta property='og:type' content='website' />
            <meta property="og:image" content={`${process.env.REACT_APP_ENVIROMENT}/api/og?title=Magias&image=wand`} />
            <meta property="twitter:image" content={`${process.env.REACT_APP_ENVIROMENT}/api/og?title=Magias&image=wand`} />
        </Head>
        <div className="main-header">
          <h1>Magias</h1>
          <div className="input">
            
            <SearchInput onChange={setSearch} suggestions={SpellName} children />
          
          </div>
            <div className="autocomplete">
          </div>
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
          <div className="content-pagination">
            <button onClick={LoadMore}>
              Carregar mais
              {isLoading ? <CircleNotch size={24} weight="fill" /> : null}
            </button>
          </div>
        </div>
    </Container>
  );
}


export const getServerSideProps: GetServerSideProps = async () => {


  const res = await fetch(`https://rpg-73e66-default-rtdb.firebaseio.com/spells.json?orderBy="$key"&startAt="0"&endAt="50"`)
  const AllSpells: SpellsProps[] = await res.json()

     return{
       props:{
        AllSpells,
        fallback: false
       }
     }
     
   }
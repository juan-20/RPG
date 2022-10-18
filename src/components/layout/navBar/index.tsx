import { useContext, useEffect, useState } from 'react';
import { Container } from './styles';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Moon, MoonStars, Sun } from 'phosphor-react';

interface props {
  toggleTheme(): void;
}
interface eType {
  key: string
}

function NavBar({ toggleTheme }: props) {
  
  useEffect(() => {
      document.addEventListener('keydown', detectKey, true)
  }, [])

  let setChecked= false;

  const detectKey = (e: eType) =>  {
    if (e.key === 'Control'){
      setChecked = true
      console.log('eita bicho kkklkkkkkkk')
      return
    }
    if (setChecked === true && e.key === 'f'){
      console.log('eita bicho kk')
    }
    console.log(e.key);
  }
  
    
  const { title } = useContext(ThemeContext);
  const router = useRouter();
  const { name } = router.query;
  
    
  return (
    <Container>
      <nav>
        <div className="world-informations">
          <Link href="/">
            <h1>🎲</h1>
          </Link>
        </div>

        <div className="center">
          <h1>{name}</h1>
        </div>


        <div className="characters">

            {title === 'light' ? <Sun onClick={toggleTheme} size={32} /> : <Moon onClick={toggleTheme} size={32} />}

        </div>
      </nav>
    </Container>
  );
};

export default NavBar;

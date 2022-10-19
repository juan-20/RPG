import { useContext, useEffect, useState } from 'react';
import { Container } from './styles';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Moon, MoonStars, Sun } from 'phosphor-react';
import Input from '../../interface/input/input';

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

  let setCommand= false;
  const [input, setInput] = useState(false);

  const detectKey = (e: eType) =>  {

    if (e.key === 'Control'){
      // @ts-ignore: Unreachable type code error
      e.preventDefault()
      setCommand = true
      return
    }
    if (setCommand === true && e.key === 'f'){
      // @ts-ignore: Unreachable type code error
      e.preventDefault()
      setInput(true)
    }
  }
  
    
  const { title } = useContext(ThemeContext);
  const router = useRouter();
  const { name } = router.query;
  const [searchInput, setSearchInput] = useState('');
    
  return (
    <Container>
      <nav>
        <div className="world-informations">
          <Link href="/">
            <h1>🎲</h1>
          </Link>
        </div>

        <div className="center">
          {input ? 
          <Input autofocus={true} onSubmit={(value: string) => {
            setSearchInput(value)
            } } type={'text'} placeholder='Pesquisa' />
          :
          <h1>{name}</h1>
          }
        </div>


        <div className="characters">

            {title === 'light' ? 
            <Sun aria-selected="true" aria-controls="change-theme" onClick={toggleTheme} size={32} /> 
            :
            <Moon aria-selected="true" aria-controls="change-theme" onClick={toggleTheme} size={32} />}

        </div>
      </nav>
    </Container>
  );
};

export default NavBar;

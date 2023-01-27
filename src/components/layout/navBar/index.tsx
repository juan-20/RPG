import { useContext, useEffect, useState } from 'react';
import { Container } from './styles';
import { ThemeContext } from 'styled-components'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Moon, Sun, User, UserCircle } from 'phosphor-react';
import Input from '../../interface/input/input';
import { useSession } from 'next-auth/react';
import Button from '../../interface/Button';
import MenuDropdown from '../../interface/MenuDropdown/MenuDropdown';

interface props {
  toggleTheme(): void;
}
interface eType {
  key: string
}

function NavBar({ toggleTheme }: props) {
  const {data: session} = useSession()
  // useEffect(() => {
  //     document.addEventListener('keydown', detectKey, true)
  // })

  let setCommand= false;
  // const [input, setInput] = useState(false);

  // const detectKey = (e: eType) =>  {

  //   if (e.key === 'Control'){
  //     // @ts-ignore: Unreachable type code error
  //     e.preventDefault()
  //     setCommand = true
  //     return
  //   }
  //   if (setCommand === true && e.key === 'f'){
  //     // @ts-ignore: Unreachable type code error
  //     e.preventDefault()
  //     setInput(true)
  //   }
  // }
  
  const router = useRouter();
  const { name } = router.query;
  const [searchInput, setSearchInput] = useState('');
  const { title } = useContext(ThemeContext);
  return (
    <Container>
      <nav>
        <div className="world-informations">
          <Link href="/" passHref>
            <h1 aria-describedby='Inicio'>🎲</h1>
          </Link>
        </div>

        <div className="center">
        </div>


        <div className="characters">

            <MenuDropdown toggleTheme={toggleTheme} />
            <div onClick={toggleTheme} className="navigationMenuItem pointer">
               {title === 'light' ? 
               <Sun weight="bold" role="button"  size={32} /> 
                  :
                <Moon weight="bold" role="button" size={32} />
                }
                </div>

        </div>
      </nav>
    </Container>
  );
};

export default NavBar;

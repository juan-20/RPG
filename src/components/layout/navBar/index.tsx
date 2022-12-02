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

interface props {
  toggleTheme(): void;
}
interface eType {
  key: string
}

function NavBar({ toggleTheme }: props) {
  const {data: session} = useSession()
  useEffect(() => {
      document.addEventListener('keydown', detectKey, true)
  })

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
          <Link href="/" passHref>
            <h1>🎲</h1>
          </Link>
        </div>

        <div className="center">
          {input ? 
          <input autoFocus type='text' placeholder='Pesquisa' />
          :
          <h1>{name}</h1>
          }
        </div>


        <div className="characters">

            {title === 'light' ? 
            <Sun role="button" onClick={toggleTheme} size={32} /> 
            :
            <Moon role="button" onClick={toggleTheme} size={32} />}

            {session ? 
               <Link href='/account'>
               <img 
               className='avatar'
               width={32} height={32}
               src={session.user?.image!} 
               alt={session.user?.name!+ 'Foto'} /> 
            </Link>
            : 
            <Link className='link' href='/account'>
              Login
            </Link>
            }

        </div>
      </nav>
    </Container>
  );
};

export default NavBar;

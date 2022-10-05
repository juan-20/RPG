import { useContext, useState } from 'react';
import { Container } from './styles';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface props {
  toggleTheme(): void;
}

function NavBar({ toggleTheme }: props) {
  const firstField = React.useRef()

  const { colors, title } = useContext(ThemeContext);
  const [onOpen, SetOnOpen] = useState('')
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
 
        <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={true}
            uncheckedIcon={false}
            offColor={colors.titleLight}
            onColor={colors.titleDark}
            />

        </div>
      </nav>
    </Container>
  );
};

export default NavBar;

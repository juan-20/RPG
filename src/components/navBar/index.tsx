import { useContext } from 'react';
import Switch from 'react-switch'
import { Container } from './styles';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import { ThemeContext } from 'styled-components'
import Link from 'next/link';
import { useRouter } from 'next/router';

interface props {
  toggleTheme(): void;
}

function NavBar({ toggleTheme }: props) {
  const { colors, title } = useContext(ThemeContext)
  const router = useRouter();
  console.log(router.pathname);
  const { name } = router.query;
    
  return (
    <Container>
      <nav>
        <div className="world-informations">
          <Link href="/Mundo">
            <h1>🗺️</h1>
          </Link>
          <Link href="/Lore">
            <h1>📜</h1>
          </Link>
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

          {router.pathname === '/Takar' ? (
                     <Menu>
                     {({ isOpen }) => (
                       <>
                         <MenuButton isActive={isOpen} as={Button} >
                           {isOpen ? 'Takar' : 'Takar'}
                         </MenuButton>
                         <MenuList>
                           <MenuItem>Vida</MenuItem>
                           <MenuItem onClick={() => alert('Kagebunshin')}>Magias</MenuItem>
                         </MenuList>
                       </>
                     )}
                   </Menu>
          ) :  (
             <Button onClick={() => router.push('/Takar')} colorScheme='gray' variant='solid'>
             Takar
           </Button>
          )}

 
      

        </div>
      </nav>
    </Container>
  );
};

export default NavBar;

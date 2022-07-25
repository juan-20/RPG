import { useContext } from 'react';
import Switch from 'react-switch'
import { Container } from './styles';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react'
import { ThemeContext } from 'styled-components'
import Link from 'next/link';

interface props {
  toggleTheme(): void;
}

function NavBar({ toggleTheme }: props) {
  const { colors, title } = useContext(ThemeContext)
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

          {/* <a href="/Takar">
            <h1>Takar</h1>
          </a> */}


        </div>
      </nav>
    </Container>
  );
};

export default NavBar;

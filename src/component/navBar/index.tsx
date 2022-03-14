import { useContext } from 'react';
import Switch from 'react-switch'
import { Container } from './styles';
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

interface props {
  toggleTheme(): void;
}

function NavBar({ toggleTheme }: props) {
  const { colors, title } = useContext(ThemeContext)
  return (
    <Container>
      <nav>
        <div className="world-informations">
          <a href="/">
            <h1>🗺️</h1>
          </a>
          <a href="/Lore">
            <h1>📜</h1>
          </a>
        </div>
        <div className="characters">
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={true}
            uncheckedIcon={false}
            offColor={colors.secondary}
            onColor={colors.primary}
          />
          <a href="/Takar">
            <h1>Takar</h1>
          </a>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;

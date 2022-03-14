import { ReactNode } from 'react';

import { Container } from './styles';

interface NavBarProps {
  children: ReactNode;
}

function NavBar() {
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
          <a href="/Takar">
            <h1>Takar</h1>
          </a>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;

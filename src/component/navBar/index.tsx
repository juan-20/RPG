import { ReactNode } from 'react';

import { Container } from './styles';

interface NavBarProps {
  children: ReactNode;
}

function NavBar() {
  return (
    <Container>
      <nav>
        <a href="/Takar">
          Takar
        </a>
      </nav>
    </Container>
  );
};

export default NavBar;

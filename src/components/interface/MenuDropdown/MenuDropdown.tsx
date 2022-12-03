import React, { useContext } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDown, Moon, SignOut, Sun } from 'phosphor-react';
import { Container } from './MenuDropdown.styles';
import { signOut, useSession } from 'next-auth/react';
import { GiMagicGate } from 'react-icons/gi'
import { ThemeContext } from 'styled-components';

interface props {
  toggleTheme(): void;
}

const MenuDropdown = ({ toggleTheme }: props) => {
    const {data: session} = useSession()
    const { title } = useContext(ThemeContext);

    if(session){
      return (
    <Container>
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            {/* Menu <CaretDown className="CaretDown" size={32} aria-hidden /> */}
               <img 
               className='avatar'
               width={32} height={32}
               src={session.user?.image!} 
               alt={session.user?.name!+ 'Foto'} /> 
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li >
                <NavigationMenu.Link asChild>
                  <a className="CalloutBanner" href="/character/create">
                    <GiMagicGate color='#fff' />
                    <div className="CalloutHeading">Crie seu personagem</div>
                    <p className="CalloutText">
                      Informações sincronizadas em qualquer dispositivo.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Item>
                  <div onClick={toggleTheme} className="navigationMenuItem pointer">
                <p>Tema:</p>
               {title === 'light' ? 
               <Sun weight="bold" role="button"  size={32} /> 
                  :
                <Moon weight="bold" role="button" size={32} />
                }
                </div>
                </NavigationMenu.Item>
              </li>
              <li>
                <NavigationMenu.Item>
                  <div
                   onClick={() => signOut()}
                  className="navigationMenuItem pointer">
                <p>Log out:</p> 
                <SignOut 
                size={32} weight="bold" />
                </div>
                </NavigationMenu.Item>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>



        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
    </Container>
  )
  }else{
    return(
      <Container>
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuListUnLogged">
          <NavigationMenu.Item>
            <NavigationMenu.Link href='/account' className="NavigationMenuUnLogged">
              <p>Log in</p>
            </NavigationMenu.Link>
           </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
      </Container>
    )
  };
};


export default MenuDropdown;
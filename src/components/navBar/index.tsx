import { useContext } from 'react';
import Switch from 'react-switch'
import { Container } from './styles';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Drawer,
  useDisclosure,
  Box,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  Textarea,
  InputLeftElement,
  Flex,
} from '@chakra-ui/react'
import { ThemeContext } from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineSearch} from 'react-icons/ai'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface props {
  toggleTheme(): void;
}

function NavBar({ toggleTheme }: props) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  const { colors, title } = useContext(ThemeContext)
  const router = useRouter();
  console.log(router.pathname);
  const { name } = router.query;
    
  return (
    <Container>
      <nav>
        <div className="world-informations">
          <Link href="/">
            <h1>Dashboard</h1>
          </Link>
        </div>

        <Stack spacing={4}>
          <InputGroup>
        <InputLeftElement
        pointerEvents='none'
        >
        <AiOutlineSearch color='gray.300' />
        </InputLeftElement>
        <Input placeholder='Pesquise aqui' />
        </InputGroup>
        </Stack>


        <div className="characters">



<Button  colorScheme='teal' onClick={onOpen}>
        <GiHamburgerMenu/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Personagens
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
            
            {router.pathname === '/Takar' ? (
                     <Menu>
                     {({ isOpen }) => (
                       <>
                         <MenuButton isActive={isOpen} as={Button} >
                           {isOpen ? 'Takar' : 'Takar'}
                         </MenuButton>
                         <MenuList>
                           <MenuItem>Mundo</MenuItem>
                           <MenuItem>Personagens</MenuItem>
                         </MenuList>
                       </>
                     )}
                   </Menu>
          ) :  (
             <>
                      <Button onClick={() => router.push('/Takar')} colorScheme='gray' variant='solid'>
                        Takar
                      </Button>
                      <Button onClick={() => router.push('/Samira')} colorScheme='gray' variant='solid'>
                          Samira
                        </Button>
              </>
          )}


           <Flex >
           <Box p='5'>
            <p>
            Mudar o tema:
            </p>
            </Box>
           <Box p='5'>
           <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={true}
            uncheckedIcon={false}
            offColor={colors.titleLight}
            onColor={colors.titleDark}
            />
            </Box>
          </Flex>
            </Stack>
          </DrawerBody>


          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

 
      

        </div>
      </nav>
    </Container>
  );
};

export default NavBar;

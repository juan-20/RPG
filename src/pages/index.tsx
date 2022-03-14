import type { NextPage } from 'next'
import GlobalStyles from '../../styles/GlobalStyles';
import NavBar from '../component/navBar';
import Takar from './Takar';

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Takar />

    </>

  )
}

export default Home

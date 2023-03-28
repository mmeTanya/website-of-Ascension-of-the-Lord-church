import type { NextPage } from 'next'
import { useMediaQuery } from "react-responsive";
import Head from 'next/head'
import Nav from "../components/nav";
import MobileNav from "../components/mobile-nav";
import Clouds from '../components/clouds'
import Hero from '../components/hero'
import News from '../components/news'
import Footer from '../components/footer'
import GoUp from '../components/goUp'


const Home: NextPage = () => {

  const isNotMobile = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className='overlay' >
      <Clouds />
      <Head>
        <title>Свято-Вознесенська парафія</title>
        <meta name="description" content="Свято-Вознесенська парафія, Українська православна церква Київського Патріархату" />
        <link rel="icon" href="/Ukrainian_Orthodox_Church_emblem.png" />
      </Head>
      <div className='container'>
        <main>
          <MobileNav />
          <Hero />
          <Nav />
          <News />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <GoUp />
    </div>
  )
}

export default Home

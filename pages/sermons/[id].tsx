import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react';
import Head from 'next/head'
import Header from '../../components/header'
import Clouds from '../../components/clouds'
import SermonsItem from '../../components/sermonsItem'
import Footer from '../../components/footer'
import GoUp from '../../components/goUp'


export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}

const SermonsItemPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    console.log(id)
  }, []);



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
          <Header />
          <SermonsItem sermonsId={id} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <GoUp />
    </div>
  )
}

export default SermonsItemPage

import Head from 'next/head'
import Menu from '../components/menu'
import Main from '../components/main'
import Body from '../components/body'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
        <script src='../public/scripts/menu.js'></script>
      </Head>
      <Menu />
      <Main />
      <Body />
      <Footer />
    </>
  )
}
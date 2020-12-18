import Head from 'next/head'
import Menu from '../components/menu'
import Main from '../components/main'
import Body from '../components/body'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import path from 'path'
import fs from 'fs'


export default function Home({lang}) {
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
      <Body { ...lang } />
      <Footer />
    </>
  )
}

export async function getStaticProps({locale}) {
  // const router = useRouter()
  // const { locale, locales, defaultLocale } = router
  const langDir = path.join(process.cwd(), 'languages')
  const fullPath = path.join(langDir, locale)
  const lang = JSON.parse(fs.readFileSync(fullPath + '.json'));
  return {
    props: {
      lang
    }
  }
}
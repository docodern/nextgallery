import Head from 'next/head'
import Menu from '../components/menu'
import Main from '../components/main'
import Body from '../components/body'
import Footer from '../components/footer'
import path from 'path'
import fs from 'fs'
import { getQueryParams } from '../lib/paths'


export default function Home({lang, menu}) {
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NextGallery</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>
      <Menu { ...menu }/>
      <Main />
      <Body { ...lang.body } />
      <Footer />
    </>
  )
}

export async function getStaticProps({locale, locales}) {
  const langDir = path.join(process.cwd(), 'languages')
  const fullPath = path.join(langDir, locale)
  const lang = await JSON.parse(fs.readFileSync(fullPath + '.json'));
  const allQueryParams = getQueryParams()
  return {
    props: {
      lang,
      locales,
      menu: {
        lang,
        allQueryParams
      }
    }
  }
}

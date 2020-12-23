import Head from 'next/head'
import Menu from '../components/menu'
import AboutMain from '../components/aboutMain'
import GalleriesMain from '../components/galleriesMain'
import Footer from '../components/footer'
import path from 'path'
import fs from 'fs'
import { useRouter } from 'next/router'
import { getQueryParams } from '../lib/paths'



export async function getStaticProps({locale}) {
  const langDir = path.join(process.cwd(), 'languages')
  const fullPath = path.join(langDir, locale)
  const lang = await JSON.parse(fs.readFileSync(fullPath + '.json'));
  const allQueryParams = getQueryParams()
  console.log('allQueryParams: '+JSON.stringify(allQueryParams));
  return {
    props: {
      lang,
      menu: {
        lang,
        allQueryParams
      }
    }
  }
}

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { about: 'about' }, locale: 'en' },
      { params: { about: 'parmani' }, locale: 'lv' },
      { params: { about: 'galleries' }, locale: 'en' },
      { params: { about: 'galerijas' }, locale: 'lv' },
    ],
    fallback: false,
  }
}


export default function About({lang, menu}) {
  const router = useRouter()
  const query = router.query.about;
  function about (){
    return (
      <AboutMain />
    )
  };
  function galleries (){
    return (
      <GalleriesMain />
    )
  };
  function content (){
    if (query === 'about'||'parmani'){
      return (
        about()
      )
    } else {
    return (
      galleries()
    )
    }
  }
   
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
        {query === 'about' ? about() : galleries()}
        {query === 'parmani' ? about() : galleries()}
        <Footer />
      </>
    )
  }

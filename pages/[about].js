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
  const data = await fetch('https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=38839d644a1950f54cd530a97a580fe9&photoset_id=72157717493309671&user_id=191513123%40N07&format=json&nojsoncallback=1')
  const photos = await data.json()
  const data2 = await fetch('https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=38839d644a1950f54cd530a97a580fe9&user_id=191513123%40N07&format=json&nojsoncallback=1')
    const photosets = await data2.json()
  return {
    props: {
      album: {
        photos,
        photosets
      },
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


export default function About({lang, menu, album}) {
  const router = useRouter()
  const query = router.query.about;
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
  const aboutDescEn = 'My story. Be sure to know me before you order your photosets ;)';
  const aboutDescLv = 'Mans stāsts. Uzzini mani, pirms tu pasūtīsi setu ;)';
   
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content={query.capitalize()} data-dynamic="true" />
          <meta property="og:description" content=
          {query === 'about' 
        ? aboutDescEn
        : query === 'parmani'
        ? aboutDescLv
        : 'none'}
        data-dynamic="true" />
          <meta property="og:type" content="article" data-dynamic="true" />
          <meta property="og:url" content={`https://mywebsite${router.asPath}`} data-dynamic="true" />
          <meta property="og:image" content="https://live.staticflickr.com/65535/50752030492_8bd476b70c_b.jpg" data-dynamic="true" />
          <title>NextGallery</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet" />
        </Head>
        <Menu { ...menu }/>
        {query === 'about'||query === 'parmani' ? <AboutMain /> : <GalleriesMain {...album} />}
        <Footer />
      </>
    )
  }

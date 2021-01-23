import Head from 'next/head'
import Menu from '../../components/menu'
import Footer from '../../components/footer'
import path from 'path'
import fs from 'fs'
import { getQueryParams } from '../../lib/paths'
import { useRouter } from 'next/router'

export async function getStaticProps({locale}) {

  var setId = [
    {id: 72157717493309671},
    {id: 72157717493643213}
]

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

  export async function getStaticPaths() {

  const data2 = await fetch('https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=38839d644a1950f54cd530a97a580fe9&user_id=191513123%40N07&format=json&nojsoncallback=1')
    const photosets = await data2.json()
   
    var parpar = []
    photosets.photosets.photoset.forEach(function(e) { 
      parpar.push({ params: { about: 'galleries', album: e.id }, locale: 'en' });
      parpar.push({ params: { about: 'galerijas', album: e.id }, locale: 'lv' });
      })

    return {
      paths: parpar,
      fallback: false,
    }
  }

export default function Home({menu}) {
  const router = useRouter()
  console.log(router);
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
        <Footer />
      </>
    )
  }
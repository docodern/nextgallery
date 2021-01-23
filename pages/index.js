import Head from 'next/head'
import Menu from '../components/menu'
import Main from '../components/main'
import Body from '../components/body'
import Footer from '../components/footer'
import path from 'path'
import fs from 'fs'
import { getQueryParams } from '../lib/paths'
// import { connectToDatabase } from '../util/mongodb'
// import run from './api/addData'


export default function Home({lang, menu, isConnected }) {
  
  // const uri =
  // "mongodb+srv://admin:pipiskin13@cloud.mongodb.com/v2/5ff5a089d6b01c1776fd5b04#clusters/detail/TryMongo?w=majority";
  // const client = new MongoClient(uri);
  // async function run() {
  //   try {
  //     await client.connect();
  //     const database = client.db("first");
  //     const collection = database.collection("movies");
  //     // create a document to be inserted
  //     const doc = { name: "Blue", town: "kanto" };
  //     const result = await collection.insertOne(doc);
  //     console.log(
  //       `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
  //     );
  //   } finally {
  //     await client.close();
  //   }
  // }
  // run().catch(console.dir);

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
      {/* {isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
            for instructions.
          </h2>
        )} */}
      <Body { ...lang.body } />
      <Footer />
    </>
  )
}

export async function getServerSideProps({locale, locales}) {

  const langDir = path.join(process.cwd(), 'languages')
  const fullPath = path.join(langDir, locale)
  const lang = await JSON.parse(fs.readFileSync(fullPath + '.json'));
  const allQueryParams = getQueryParams()

  // const { client } = await connectToDatabase()

  // const isConnected = await client.isConnected() // Returns true or false

  return {
    props: {
      // isConnected,
      lang,
      locales,
      menu: {
        lang,
        allQueryParams
      }
    }
  }
}

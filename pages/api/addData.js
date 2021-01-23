import { MongoClient } from 'mongodb'


const uri =
  "mongodb+srv://admin:pipiskin13@trymongo.lepnj.mongodb.net/first?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  export default async function run(req, res) {
        try {
            await client.connect();
            const database = client.db("first");
            const collection = database.collection("movies");
            // create a document to be inserted
            const doc = { name: "Blue", town: "kanto" };
            const result = await collection.insertOne(doc);
            console.log(
              `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
            );
          } finally {
            await client.close();
          }
  }
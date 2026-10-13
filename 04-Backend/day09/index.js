// id : coderarmy8_db_user
//pass: KTJJx25DcKLkSfyb
//connection String : mongodb+srv://coderarmy8_db_user:KTJJx25DcKLkSfyb@cluster0.0zq95sh.mongodb.net/

// import dns from "node:dns";

// dns.setServers(["8.8.8.8"]);


import { MongoClient } from 'mongodb';
async function runGetStarted() {
  // Replace the uri string with your connection string
  const uri = 'mongodb+srv://coderarmy8_db_user:KTJJx25DcKLkSfyb@cluster0.0zq95sh.mongodb.net/';
  const client = new MongoClient(uri);
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    // Queries for a movie that has a title value of 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir);
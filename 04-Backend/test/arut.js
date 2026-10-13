import { MongoClient } from 'mongodb';
async function runGetStarted() {
  // Replace the uri string with your connection string
  const uri = 'mongodb+srv://coderarmy8_db_user:KTJJx25DcKLkSfyb@cluster0.0zq95sh.mongodb.net/';
  const client = new MongoClient(uri);
  try {
    const database = client.db('Aarut');
    const movies = database.collection('Amuu');
    // Queries for a movie that has a title value of 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.insertMany( [
   { title: "Inception", year: 2010, genres: [ "Action", "Sci-Fi" ] },
   { title: "The Matrix", year: 1999, genres: [ "Action", "Sci-Fi" ] },
   { title: "Interstellar", year: 2014, genres: [ "Adventure", "Sci-Fi" ] }
] )
    console.log(movie);
  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir);
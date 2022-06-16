import { MongoClient } from 'mongodb';

const URL = process.env.MONGO_DB_URL || 'mongodb://localhost:27017/Ebytr';
const client = new MongoClient(URL);

export default async function dbReset() {
  try {
    await client.connect();
    await client.db().dropDatabase();
    // eslint-disable-next-line no-console
    console.log('DB dropped successfully.');
  } finally {
    await client.close();
  }
  return null;
}

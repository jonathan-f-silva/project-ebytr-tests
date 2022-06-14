import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/Ebytr';
const client = new MongoClient(uri);

export default async function dropEbytr() {
  try {
    await client.connect();
    await client.db().dropDatabase();
    console.log('Ebytr DB dropped successfully.');
  } finally {
    await client.close();
  }
  return null;
}

dropEbytr();

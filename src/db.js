import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MongoClient = new MongoClient(process.env.MONGO_URI);
await MongoClient.connect();
const db = MongoClient.db("mywallet");

export default db;
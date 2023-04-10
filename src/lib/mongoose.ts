// /lib/connectMongo.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const opts = {
  dbName: process.env.DB_NAME,
};

async function connectMongo() {
  console.log(mongoose.connection.readyState);
  if (mongoose.connection.readyState === mongoose.ConnectionStates.connected) {
    console.log('connection already stablished');
  } else {
    console.log('opening new connection');
    await mongoose.connect(MONGODB_URI, opts);
  }
}

export default connectMongo;

import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect(process.env.MONGODB_URI);
const disconnectMongo = async () => mongoose.connection.close();

export {connectMongo, disconnectMongo};

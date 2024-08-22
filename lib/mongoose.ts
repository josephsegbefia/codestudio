import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);
  if (!process.env.MONGODB_URL) {
    return console.log('MISSING DATABASE CONN URL');
  }

  if (isConnected) {
    return console.log('Mongodb is already connected');
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'codestudio',
    });

    isConnected = true;
    console.log('Connected!!');
  } catch (error) {
    console.log('Connection failed', error);
  }
};

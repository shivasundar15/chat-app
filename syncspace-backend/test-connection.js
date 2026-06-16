const mongoose = require('mongoose');
require('dotenv').config({ path: 'syncspace-backend/.env' });

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error('MONGO_URI not found in .env file');
  process.exit(1);
}

const connectToDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000 // Timeout after 5 seconds
    });
    console.log('Successfully connected to MongoDB Atlas!');
    const db = mongoose.connection;
    console.log(`Database Name: ${db.name}`);
    
    // Let's list collections to be sure
    const collections = await db.db.listCollections().toArray();
    console.log('Collections:');
    collections.forEach(collection => {
        console.log(`- ${collection.name}`);
    });

    mongoose.connection.close();
  } catch (error) {
    console.error('Could not connect to MongoDB Atlas.');
    console.error('Error:', error.message);
    if (error.reason) {
        console.error('Reason:', error.reason);
    }
    process.exit(1);
  }
};

connectToDB();

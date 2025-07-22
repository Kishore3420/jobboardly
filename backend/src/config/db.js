import mongoose from "mongoose";
import logger from '../utils/logger.js';

// Establish MongoDB connection
const connectDB = async () => {
    logger.info("Connecting to MongoDB...");
    // console.log(`Using URI: ${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
  try {
    // Connect to MongoDB using the URI and database name
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);//mongodb://127.0.0.1:27017/jobboardly
    logger.info(`MongoDB connected successfully! Host: ${connection.connection.host}`);
  } catch (err) {
    // Log error and exit process if connection fails
    logger.error(`MongoDB connection failed. ERROR: ${err.message}`, {
      stack: err.stack,
    });
    process.exit(1); // Exit with failure code
  }
};

export { connectDB };

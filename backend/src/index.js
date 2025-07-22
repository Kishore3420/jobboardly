import { app } from "./app.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Connect DB with server
connectDB()
  .then(() => {
    const port = 5000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Server failed to start due to database connection issue", {
      stack: err.stack,
    });
  });
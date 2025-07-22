import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB } from "./config/db.js";
import logger from './utils/logger.js';
import jobRoutes from './routes/job.route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '500mb' })); // To handle JSON payloads
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true })); // To handle URL-encoded payloads
app.use(
  cors({
    origin: [
      "http://localhost:3000",
    ],
    credentials: true,
  }),
);

app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});

app.use('/api', jobRoutes);

// app.listen(5000, () => {
//   logger.l('Server is running on port 5000');
// });

export { app };
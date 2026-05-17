import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRouter from './routes/api.js'; // Import our new routing layer

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('=== DATA GATEWAY INTERFACE: CONNECTED TO CLUSTER ==='))
  .catch((error) => console.error('=== CONNECTION FAILURE VECTOR ===', error));

// Mount the absolute tracking routes
app.use('/api/v1', apiRouter);

app.get('/', (req, res) => {
  res.json({ status: "LOCAL_HOST_ACTIVE", system_state: "PENDING_DEPLOYMENT" });
});

app.listen(PORT, () => {
  console.log(`=== SERVER OPERATIONAL ON INTERFACE PORT: ${PORT} ===`);
});
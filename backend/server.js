import express, { json } from 'express';
import cors from 'cors';
import 'dotenv/config';

import contactRoutes from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());

// Modular Routes
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Backend is running smoothly.' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
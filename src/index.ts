import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import oddsRouter from './routes/odds';
import googleSheetsRouter from './routes/googleSheets';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/odds', oddsRouter);
app.use('/google', googleSheetsRouter);

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'Gambit Sheets API' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


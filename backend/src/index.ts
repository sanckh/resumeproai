import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import admin from 'firebase-admin';
import rateLimit from 'express-rate-limit';
import cors from 'cors';


const app = express();
const firebase = require('./firebase_options');
const port = process.env.PORT || 3000;

const allowedOrigins = [
  'http://localhost:8081',
  'http://10.0.2.2:3000',
  'http://192.168.1.79:3000',
  'http://192.168.1.96:3000',
];

// Use Parameters utility to infer CORS options type
const corsOptions: Parameters<typeof cors>[0] = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin) return callback(null, true); // Allow requests with no origin

    if (allowedOrigins.includes(origin)) {
      callback(null, true); // Allow request
    } else {
      callback(new Error(`CORS policy does not allow access from origin: ${origin}`), false); // Block request
    }
  },
  credentials: true, // Allow cookies and credentials
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 204, // For legacy browsers like IE11
};

// Middleware
app.use(cors(corsOptions));

app.options('*', cors(corsOptions));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
import express from 'express';
import mongoose from 'mongoose';

import 'dotenv/config';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';

import studentsRouter from './routes/students.js';
import groupsRouter from './routes/groups.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

async function main() {
  console.log('Connecting...');
  await mongoose.connect(process.env.DB_CONNECTION_STRING);
}

main().catch((err) => console.log(err));

app.use('/api/students', studentsRouter);
app.use('/api/groups', groupsRouter);

// Startup our app at http://localhost:3000
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}!`));

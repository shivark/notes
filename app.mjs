import express from 'express';
import path from 'path';
import { router } from './routes/index.mjs';
import bodyParser from 'body-parser';

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
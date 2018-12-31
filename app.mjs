import express from 'express';
import { router } from './routes/index.route.mjs';
import bodyParser from 'body-parser';

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
app.set('view engine', 'ejs');
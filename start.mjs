import { app } from './app.mjs';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config();

mongoose.connect(process.env.DATABASE, { useMongoClient: true });
mongoose.Promise = global.Promise;
mongoose.connection
    .on('connected', () => {
        console.log(`Mongoose connection open on ${process.env.DATABASE}`);
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });

const server = app.listen(3000, () => {
    console.log(`Express is running on port ${server.address().port}`);
});
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import travelRouter from './routes/routes.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api', travelRouter);

    const {BD_HOST} = process.env;

    mongoose.connect(BD_HOST)
    .then(() => {
        app.listen(3000, () => {console.log('Server is running on port 3000')});
    })
    .catch(error => {
        console.log(error.message);
        process.exit(1)
    })



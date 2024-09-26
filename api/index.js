import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';  // Matches the usage below
import authRouter from './routes/auth.route.js';  // Changed to 'authRouter' to match the usage below

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to mongoDB!');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use('/api/user', userRouter);  // '/api/user' route
app.use('/api/auth', authRouter);  // '/api/auth' route

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});

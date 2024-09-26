import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

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

// Error handling middleware (should be placed before app.listen)
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});

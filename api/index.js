import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';  // Changed to 'userRouter' to match the usage below

dotenv.config();

mongoose
    .connect(process.env.MONGO, {
        useNewUrlParser: true,    // Added options for compatibility
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to mongoDB!');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();

// Middleware to parse JSON (if needed)
app.use(express.json());

app.use('/api/user', userRouter); // Changed from 'userRoute' to 'userRouter' to match the import

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});

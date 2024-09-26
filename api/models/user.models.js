import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,     // Corrected 'string' to 'String'
        required: true,
        unique: true,     // 'unique' instead of 'uniqid'
    },
    email: {
        type: String,     // Corrected 'string' to 'String'
        required: true,
        unique: true,     // 'unique' instead of 'uniqid'
    },
    password: {
        type: String,     // Corrected 'string' to 'String'
        required: true,
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;

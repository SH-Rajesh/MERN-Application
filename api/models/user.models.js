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
    },
    avatar: {
        type: String,
        default: "https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/461391408_1565765017625912_8072432910665173699_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0M1uMKwufCIQ7kNvgHR6XRf&_nc_ht=scontent.fktm17-1.fna&oh=00_AYC594g53jCz2L7wY6fk4IqDVb1AQQgESe9hivVj0eNKQg&oe=66FC24FB"
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;

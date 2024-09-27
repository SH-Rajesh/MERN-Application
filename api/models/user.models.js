import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar:{
            type: String,
            default: "https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/461391408_1565765017625912_8072432910665173699_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0M1uMKwufCIQ7kNvgHR6XRf&_nc_ht=scontent.fktm17-1.fna&_nc_gid=A_AcVFXN1qRzrVeO054MVJF&oh=00_AYA1AxPS8KmZylyiVeQi6sSe6HU88X3oZaeS0W-1x6yAow&oe=66FC957B"
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
import User from "../models/user.models.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        // Hash the password before saving
        const hashedPassword = bcryptjs.hashSync(password, 10);

        // Create new user object with hashed password
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        // Save the new user in the database
        await newUser.save();

        // Respond with success message
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        // Handle errors, such as duplicate email/username or other server issues
       next(error);
    }
};

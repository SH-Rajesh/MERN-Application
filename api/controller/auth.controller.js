import User from "../models/user.models.js";
import bcryptjs from 'bcryptjs';
import {errorHandler} from "../utils/error.js";
import jwt from 'jsonwebtoken';

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

export const signin = async (req, res, next ) => {
    const { email , password } = req.body;
    try {
        const validUser = await User.findOne({email });
        if(!validUser) return next(errorHandler(404, 'User not found!'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validUser) return next (errorHandler(401, 'Invalid Password'));
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        const { password : pass, ...rest } = validUser._doc;
        res
            .cookie('access_token', token, {httpOnly: true})
            .status(200)
            .json(rest)

    } catch (error) {
        next(error);
    }
};

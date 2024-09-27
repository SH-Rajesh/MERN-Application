
import bcryptjs from 'bcryptjs';
import User from '../models/user.models.js';
import { errorHandler } from '../utils/error.js';

// Test Route
export const test = (req, res) => {
    res.json({
        message: 'API route is working!',
    });
};

// Update User
export const updateUser = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.id) {
            return next(errorHandler(401, 'You can only update your own account!'));
        }

        // Check if the request includes a password update and hash the new password
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    avatar: req.body.avatar,
                },
            },
            { new: true } // Return the updated document
        );

        if (!updatedUser) {
            return next(errorHandler(404, 'User not found!'));
        }

        // Exclude the password from the response
        const { password, ...rest } = updatedUser._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};

// Delete User
export const deleteUser = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.id) {
            return next(errorHandler(401, 'You can only delete your own account!'));
        }

        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return next(errorHandler(404, 'User not found!'));
        }

        res.clearCookie('access_token');
        res.status(200).json('User has been deleted!');
    } catch (error) {
        next(error);
    }
};

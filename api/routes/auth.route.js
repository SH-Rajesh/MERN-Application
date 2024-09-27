import express from 'express';
import { google, signOut, signin, signup } from '../controller/auth.controller.js';

const router = express.Router();

// Route for user signup
router.post('/Signup', signup);

// Route for user signin
router.post('/Signin', signin);

// Route for Google OAuth
router.post('/google', google);

// Route for user signout
router.get('/signout', signOut);

export default router;

import mongoose from "mongoose"
import User from "../models/User.model.js";
import bcryptjs from 'bcryptjs';

export const signin = async (req, res,next) => {
    try {
        const { password, email, username } = req.body;

        // Generate a salt (10 rounds)
        const salt = await bcryptjs.genSalt(10);

        // Hash the password
        const hashedPass = bcryptjs.hashSync(password, salt); // Check this line

        // Create a new user instance
        const user = new User({ username, email, password: hashedPass });

        // Save the user to the database
        const doc = await user.save();

        res.json(doc);
    } catch (error) {
        // Handle any errors (e.g., validation, database issues)
        next(error)
    }
};

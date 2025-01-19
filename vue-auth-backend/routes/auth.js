const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

// POST route to save a new user to the database
router.post('/add-user', async (req, res) => {
    try {
        const { firstName, lastName, age, mobile, adharno, address, bankDetails } = req.body;

        // Create a new user instance
        const newUser = new User({
            firstName,
            lastName,
            age,
            mobile,
            adharno,
            address,
            bankDetails
        });

        // Save the new user to the database
        await newUser.save();

        // Send a response back
        res.status(201).json({ message: 'User added successfully!', user: newUser });
    } catch (error) {
        res.status(400).json({ message: 'Error adding user', error });
    }
});

module.exports = router;

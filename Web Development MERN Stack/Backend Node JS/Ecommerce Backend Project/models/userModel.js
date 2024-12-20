const mongoose = require('mongoose');
const { unsubscribe } = require('../routes/testRoutes');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },

    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'email is taken'],
    },

    password: {
        type: String,
        required: [true, 'password is required'],
        minLength: [6, 'password length should be greater than 6 characters.'],
    },

    address: {
        type: String,
        required: [true, 'address is required'],
    },

    city: {
        type: String,
        required: [true, 'city name is required'],
    },

    country: {
        type: String,
        required: [true, 'country name is required'],
    },

    age: {
        type: Number,
        required: [true, 'Provide your age'],
        min: [15, 'Restricted for age lesser than 15'],
        max: [100, 'Age has to be lesser than 100'],
    },

    phone: {
        type: String,
        required: [true, 'Phone number is required'],
    },

    profilePicture: {
        type: String,
    }

}, { timestamps: true });

module.exports = userSchema;
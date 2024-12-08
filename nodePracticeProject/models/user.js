const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,  // Ensures name is required
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Ensures email is unique
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'], // Regex to validate email format
    },
    age: {
        type: Number,
        min: [18, 'Age must be at least 18'], // Validates that age is at least 18
    },
});

module.exports = mongoose.model('User', userSchema);

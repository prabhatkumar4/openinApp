const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    phone_number: Number,
    priority: Number,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;

const mongoose = require('mongoose');
const progressUserSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    chapter1: {
        type: String,
        required: true
    },
    chapter2: {
        type: String,
        required: true
    }
});

const progressUsersCss = mongoose.model('ProgressUsersCss', progressUserSchema);

module.exports = progressUsersCss;
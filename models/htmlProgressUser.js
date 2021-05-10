const mongoose = require('mongoose')
const htmlProgressSchema = new mongoose.Schema({
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
    },
    chapter3: {
       type: String,
        required: true
    },
    chapter4: {
       type: String,
        required: true
    }
});

const usersProgress = mongoose.model('usersProgressHtml', htmlProgressSchema);

module.exports = usersProgress;
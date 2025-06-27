
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true,
    },
    comment:{
        type: String,
        required: false,
    },
    file: {
        type: String,
        required: false,
    },
    url: {
        type: String,
        required: false,
    },
    createdAt: {
     
            type: Date,
            default: Date.now,

    },

})

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;

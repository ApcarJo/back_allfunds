
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publicationSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    description: { 
        type: String, 
        required: true 
    },

    content: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    archiveDate: {
        type: Date,
        required: false
    },

    isArchived: {
        type: Boolean,
        default: false
    },

    user_id: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: new Date,
    }


});

const Publication = mongoose.model("Publication", publicationSchema);
module.exports = Publication;

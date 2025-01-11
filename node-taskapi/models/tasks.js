// models/Task.js  
const mongoose = require('mongoose');  

const taskSchema = new mongoose.Schema({  
    title: { type: String, required: true },  
    description: { type: String, required: true },  
    media: { type: String, required: true }, // URL to the media file  
    createdAt: { type: Date, default: Date.now },  
});  

module.exports = mongoose.model('Task', taskSchema);

// routes/taskRoutes.js  
const express = require('express');  
const multer = require('multer');  
const Task = require('../models/Task');  

const router = express.Router();  
const upload = multer({ dest: 'uploads/' }); // Configure multer  

// Create a new task  
router.post('/', upload.single('media'), async (req, res) => {  
    try {  
        const newTask = new Task({  
            title: req.body.title,  
            description: req.body.description,  
            media: req.file.path, // Store the path to the uploaded file  
        });  
        await newTask.save();  
        res.status(201).json(newTask);  
    } catch (error) {  
        res.status(500).json({ message: error.message });  
    }  
});  

// Get all tasks  
router.get('/', async (req, res) => {  
    try {  
        const tasks = await Task.find();  
        res.json(tasks);  
    } catch (error) {  
        res.status(500).json({ message: error.message });  
    }  
});  

module.exports = router;  // Corrected export statement
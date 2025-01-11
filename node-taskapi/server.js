// server.js  
const express = require('express');  
const connectDB = require('./config/db');  
const taskRoutes = require('./routes/taskRoutes');  
const setupSwagger = require('./swagger/swagger');  

const app = express();  
const PORT = process.env.PORT || 5000;  

// Middleware  
app.use(express.json());  
//  app.use('/tasks', taskRoutes);   
// app.use('/api-docs', express.static('api-docs'));   

// Connect to Database  
connectDB();  

// Setup Swagger  
// setupSwagger(app);  

// Start server  
app.listen(PORT, () => {  
    console.log(`Server is running on http://localhost:${PORT}`);  
});
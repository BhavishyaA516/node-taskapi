// swagger/swagger.js  
const swaggerJsDoc = require('swagger-jsdoc');  
const swaggerUi = require('swagger-ui-express');  

const swaggerOptions = {  
    swaggerDefinition: {  
        openapi: '3.0.0',  
        info: {  
            title: 'Task Management API',  
            version: '1.0.0',  
        },  
    },  
    apis: ['./routes/taskRoutes.js'], // Path to the API docs  
};  

const swaggerDocs = swaggerJsDoc(swaggerOptions);  

const setupSwagger = (app) => {  
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));  
};  

module.exports = setupSwagger;
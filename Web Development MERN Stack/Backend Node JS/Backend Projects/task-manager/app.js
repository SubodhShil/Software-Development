const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const notFound = require('./middleware/not-found');

require('dotenv').config();
const app = express();

// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Task Manager API',
            version: '1.0.0',
            description: 'This API powers an application that helps users manage daily tasks.',
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 3000}`,
                description: 'Local server',
            },
        ],
        components: {
            schemas: {
                Task: {
                    type: 'object',
                    required: ['taskName'],
                    properties: {
                        taskName: { type: 'string', example: 'Learn C#' },
                        taskContent: { type: 'string', example: 'Complete basics of C#' },
                        isCompleted: { type: 'boolean', default: false },
                        dueDate: { type: 'string', format: 'date', example: '2025-03-15' },
                        createdBy: { type: 'string', example: '507f1f77bcf86cd799439011' },
                    },
                },
            },
        },
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Middleware
app.use(express.json());
app.use(cors());

// Swagger route
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Task routes
app.use('/api/v1/tasks', tasks);

// 404 Middleware (should be at the end)
app.use(notFound);

const PORT = process.env.PORT || 3000;

const startDB = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => console.log(`Running on: http://localhost:${PORT}/api-docs`));
    } catch (err) {
        console.log(`Database connection error:\n${err}`);
    }
};

startDB();

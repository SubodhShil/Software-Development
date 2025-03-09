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
                url: `http://localhost:${process.env.PORT || 3000}/api/v1`,
                description: 'Local server',
            },
        ],
        components: {
            schemas: {
                Task: {
                    type: 'object',
                    required: ['taskName'],
                    properties: {
                        taskName: {
                            type: 'string',
                            description: 'Name of the task',
                            example: 'Learn C#',
                        },
                        taskContent: {
                            type: 'string',
                            description: 'Details of the task',
                            example: 'Complete basics of C#',
                        },
                        isCompleted: {
                            type: 'boolean',
                            description: 'Task completion status',
                            default: false,
                        },
                        dueDate: {
                            type: 'string',
                            format: 'date',
                            description: 'Due date of the task',
                            example: '2025-03-15',
                        },
                        createdBy: {
                            type: 'string',
                            description: 'ID of the user who created the task',
                            example: '507f1f77bcf86cd799439011',
                        },
                    },
                },
            },
        },
    },
    apis: ['./routes/*.js'],
};




// module.exports = 
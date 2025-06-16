// swagger.js
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Login/Signup API',
            version: '1.0.0',
            description: 'API documentation for user authentication',
        },
    },
    apis: ['./authRoutes.js'], // Path to your route files
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
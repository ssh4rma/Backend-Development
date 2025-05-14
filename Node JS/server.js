import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './swagger.js';

const app = express();

// Serve Swagger UI at /api-docs
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Sample API endpoint with Swagger annotations
/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a greeting message
 *     description: This endpoint returns a simple greeting message.
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello, World!
 */
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
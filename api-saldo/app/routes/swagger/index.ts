import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../../configs/swagger';

const app: Application = express();

app.get('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
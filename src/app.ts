import express from 'express';
import crimeRoutes from './routes/crimeRouter.js';
import denunciaRoutes from './routes/denunciaRouter.js';
import { requestLogger } from './middleware/login.js';
import { errorHandler } from './middleware/Handlerdeerro.js';

const app = express();

app.use(express.json());
app.use(requestLogger);

app.use('/api/crimes', crimeRoutes);
app.use('/api/denuncias', denunciaRoutes);

app.use(errorHandler);

export default app;

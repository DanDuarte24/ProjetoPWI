// app.ts
import express from 'express';
import cors from 'cors';
import crimeRoutes from './routes/crimeRouter';
import denunciaRoutes from './routes/denunciaRouter';
import authRoutes from './routes/authRouter';
import uploadRoutes from './routes/uploadRouter';
import { requestLogger } from './middleware/requestLogger';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json());
app.use(cors());
app.use(requestLogger);

// Rotas públicas
app.use('/api/auth', authRoutes);

// Rotas protegidas – cada rota exige token no header "Authorization: Bearer <token>"
app.use('/api/crimes', crimeRoutes);
app.use('/api/denuncias', denunciaRoutes);
app.use('/api/upload', uploadRoutes);

app.use(errorHandler);

export default app;

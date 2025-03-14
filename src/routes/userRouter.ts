// routes/userRouter.ts
import { Router } from 'express';
import { listarUsuarios } from '../controllers/userController';
import { authenticateToken } from '../middleware/authenticateToken';

const router = Router();

// Rota para listar todos os usuários (protege com token)
router.get('/', authenticateToken, listarUsuarios);

export default router;

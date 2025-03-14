import { Router } from 'express';
import { criarCrime, listarCrimes, obterCrime, atualizarCrime, deletarCrime } from '../controllers/crimeController';
import { authenticateToken } from '../middleware/authenticateToken';

const router = Router();

router.post('/', authenticateToken, criarCrime);
router.get('/', authenticateToken, listarCrimes);
router.get('/:id', authenticateToken, obterCrime);
router.put('/:id', authenticateToken, atualizarCrime);
router.delete('/:id', authenticateToken, deletarCrime);

export default router;

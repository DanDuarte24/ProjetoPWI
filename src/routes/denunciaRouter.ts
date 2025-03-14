import { Router } from 'express';
import { criarDenuncia, listarDenuncias, listarDenunciasPorCrime, obterDenuncia, atualizarDenuncia, deletarDenuncia } from '../controllers/denunciaController';
import { authenticateToken } from '../middleware/authenticateToken';

const router = Router();

router.post('/', authenticateToken, criarDenuncia);
router.get('/', authenticateToken, listarDenuncias);
router.get('/crime/:crimeId', authenticateToken, listarDenunciasPorCrime);
router.get('/:id', authenticateToken, obterDenuncia);
router.put('/:id', authenticateToken, atualizarDenuncia);
router.delete('/:id', authenticateToken, deletarDenuncia);

export default router;

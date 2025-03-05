import { Router } from 'express';
import { criarDenuncia, listarDenuncias, obterDenuncia, atualizarDenuncia, deletarDenuncia, listarDenunciasPorCrime } from '../controllers/denunciaController';

const router = Router();

router.post('/', criarDenuncia);
router.get('/', listarDenuncias);
router.get('/:id', obterDenuncia);
router.put('/:id', atualizarDenuncia);
router.delete('/:id', deletarDenuncia);

// Rota para listar denúncias de um crime específico
router.get('/crime/:crimeId', listarDenunciasPorCrime);

export default router;

import { Router } from 'express';
import { criarCrime, listarCrimes, obterCrime, atualizarCrime, deletarCrime} from '../controllers/crimeController';

const router = Router();

router.post('/', criarCrime);
router.get('/', listarCrimes);
router.get('/:id', obterCrime);
router.put('/:id', atualizarCrime);
router.delete('/:id', deletarCrime);

export default router;

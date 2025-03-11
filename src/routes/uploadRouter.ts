// routes/uploadRouter.ts
import { Router } from 'express';
import multer from 'multer';
import { uploadImage } from '../controllers/uploadController';
import { authenticateToken } from '../middleware/authenticateToken';
import { storage } from '../utils/muterConfig';

const router = Router();
const upload = multer({ storage });

router.post('/', authenticateToken, upload.single('imagem'), uploadImage);

export default router;

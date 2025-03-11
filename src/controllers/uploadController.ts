// controllers/uploadController.ts
import { Request, Response, NextFunction } from 'express';

export const uploadImage = (req: Request, res: Response, next: NextFunction) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Nenhum arquivo enviado.' });
  }
  res.status(201).json({ message: 'Upload realizado com sucesso.', file: req.file });
};

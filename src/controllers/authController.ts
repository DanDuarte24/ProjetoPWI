// controllers/authController.ts
import { Request, Response, NextFunction } from 'express';
import authService from '../services/authService';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Username e password são obrigatórios.' });
    }
    const token = await authService.login(username, password);
    res.json({ token });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

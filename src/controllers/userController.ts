// controllers/userController.ts
import { Request, Response, NextFunction } from 'express';
import userRepository from '../repositories/userRepository';

export const listarUsuarios = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const usuarios = await userRepository.getAllUsers();
    res.json(usuarios);
  } catch (error: any) {
    next(error);
  }
};

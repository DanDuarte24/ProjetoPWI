// middleware/authenticateToken.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    res.status(401).json({ message: 'Token não informado.' });
    return
  }
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    res.status(401).json({ message: 'Formato do token inválido.' });
    return
  }
  const token = parts[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secretKey');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: 'Token inválido ou expirado.' });
   
  }
};

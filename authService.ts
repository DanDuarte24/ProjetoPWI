// services/authService.ts
import jwt from 'jsonwebtoken';
import userRepository from '../repositories/userRepository';

class AuthService {
  async login(username: string, password: string): Promise<string> {
    const user = await userRepository.findByUsername(username);
    if (!user || user.password !== password) {
      throw new Error('Credenciais inválidas.');
    }
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET || 'secretKey', { expiresIn: '1h' });
    return token;
  }
}

export default new AuthService();

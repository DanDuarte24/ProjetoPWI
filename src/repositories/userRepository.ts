// repositories/userRepository.ts
import { IUser, User } from '../models/user';

class UserRepository {
  private users: IUser[] = [];
  private nextId: number = 1;

  constructor() {
    // Usuário padrão para teste (username: admin, password: 123456)
    this.create({ username: 'admin', password: '123456' });
  }

  async create(userData: Omit<IUser, 'id'>): Promise<IUser> {
    const user = new User(this.nextId++, userData.username, userData.password);
    this.users.push(user);
    return user;
  }

  async findByUsername(username: string): Promise<IUser | undefined> {
    return this.users.find(u => u.username === username);
  }
}

export default new UserRepository();

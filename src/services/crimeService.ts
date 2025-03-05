import crimeRepository from '../repositories/crimeRepository';
import { ICrime } from '../models/crime';

class CrimeService {
  async createCrime(crimeData: Omit<ICrime, 'id' | 'data'>) {
    return await crimeRepository.create(crimeData);
  }

  async getAllCrimes() {
    return await crimeRepository.getAll();
  }

  async getCrimeById(id: number) {
    const crime = await crimeRepository.getById(id);
    if (!crime) throw new Error('Crime não encontrado');
    return crime;
  }

  async updateCrime(id: number, updateData: Partial<Omit<ICrime, 'id' | 'data'>>) {
    const crime = await crimeRepository.update(id, updateData);
    if (!crime) throw new Error('Crime não encontrado');
    return crime;
  }

  async deleteCrime(id: number) {
    const success = await crimeRepository.delete(id);
    if (!success) throw new Error('Crime não encontrado');
    return success;
  }
}

export default new CrimeService();

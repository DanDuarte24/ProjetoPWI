// services/denunciaService.ts
import denunciaRepository from '../repositories/denunciaRepository';
import { IDenuncia } from '../models/denuncia';
import crimeService from './crimeService';

class DenunciaService {
  async createDenuncia(denunciaData: Omit<IDenuncia, 'id' | 'data'>) {
    // Verifica se o crime existe
    await crimeService.getCrimeById(denunciaData.crimeId);
    return await denunciaRepository.create(denunciaData);
  }

  async getAllDenuncias() {
    return await denunciaRepository.getAll();
  }

  async getDenunciaById(id: number) {
    const denuncia = await denunciaRepository.getById(id);
    if (!denuncia) throw new Error('Denúncia não encontrada.');
    return denuncia;
  }

  async updateDenuncia(id: number, updateData: Partial<Omit<IDenuncia, 'id' | 'data' | 'crimeId'>>) {
    const denuncia = await denunciaRepository.update(id, updateData);
    if (!denuncia) throw new Error('Denúncia não encontrada.');
    return denuncia;
  }

  async deleteDenuncia(id: number) {
    const success = await denunciaRepository.delete(id);
    if (!success) throw new Error('Denúncia não encontrada.');
    return success;
  }

  async getDenunciasByCrimeId(crimeId: number) {
    return await denunciaRepository.getByCrimeId(crimeId);
  }
}

export default new DenunciaService();

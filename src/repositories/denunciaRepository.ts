// repositories/denunciaRepository.ts
import { Denuncia, IDenuncia } from '../models/denuncia';

class DenunciaRepository {
  private denuncias: Denuncia[] = [];
  private nextId: number = 1;

  async create(denunciaData: Omit<IDenuncia, 'id' | 'data'>): Promise<Denuncia> {
    const denuncia = new Denuncia(
      this.nextId++,
      denunciaData.crimeId,
      denunciaData.descricao,
      denunciaData.nomeDenunciante,
      denunciaData.localizacao
    );
    this.denuncias.push(denuncia);
    return denuncia;
  }

  async getAll(): Promise<Denuncia[]> {
    return this.denuncias;
  }

  async getById(id: number): Promise<Denuncia | undefined> {
    return this.denuncias.find(d => d.id === id);
  }

  async update(id: number, updateData: Partial<Omit<IDenuncia, 'id' | 'data' | 'crimeId'>>): Promise<Denuncia | null> {
    const denuncia = await this.getById(id);
    if (!denuncia) return null;
    denuncia.descricao = updateData.descricao || denuncia.descricao;
    denuncia.nomeDenunciante = updateData.nomeDenunciante || denuncia.nomeDenunciante;
    return denuncia;
  }

  async delete(id: number): Promise<boolean> {
    const index = this.denuncias.findIndex(d => d.id === id);
    if (index === -1) return false;
    this.denuncias.splice(index, 1);
    return true;
  }

  async getByCrimeId(crimeId: number): Promise<Denuncia[]> {
    return this.denuncias.filter(d => d.crimeId === crimeId);
  }
}

export default new DenunciaRepository();

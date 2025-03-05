import { Crime, ICrime } from '../models/crime';

class CrimeRepository {
  private crimes: Crime[] = [];
  private nextId: number = 1; // Começa em 1 e é incrementado automaticamente

  async create(crimeData: Omit<ICrime, 'id' | 'data'>): Promise<Crime> {
    // Cria o objeto com um id gerado automaticamente
    const crime = new Crime(this.nextId++, crimeData.nome, crimeData.descricao, crimeData.localizacao);
    this.crimes.push(crime);
    return crime;
  }

  async getAll(): Promise<Crime[]> {
    return this.crimes;
  }

  async getById(id: number): Promise<Crime | undefined> {
    return this.crimes.find(c => c.id === id);
  }

  async update(id: number, updateData: Partial<Omit<ICrime, 'id' | 'data'>>): Promise<Crime | null> {
    const crime = await this.getById(id);
    if (!crime) return null;
    crime.nome = updateData.nome || crime.nome;
    crime.descricao = updateData.descricao || crime.descricao;
    return crime;
  }

  async delete(id: number): Promise<boolean> {
    const index = this.crimes.findIndex(c => c.id === id);
    if (index === -1) return false;
    this.crimes.splice(index, 1);
    return true;
  }
}

export default new CrimeRepository();

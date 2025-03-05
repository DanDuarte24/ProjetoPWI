import crimeService from '../services/crimeService';

/**
 * Caso de uso: Registrar um novo crime.
 * Aqui podemos adicionar validações específicas ou lógica adicional antes de chamar o serviço.
 * @param nome - Nome do crime.
 * @param descricao - Descrição do crime.
 * @returns O crime recém-criado.
 */
export async function registrarCrimeUseCase(nome: string, descricao: string) {
  // Validações ou regras de negócio específicas podem ser adicionadas aqui.
  if (!nome || !descricao) {
    throw new Error('Nome e descrição são obrigatórios para registrar um crime.');
  }
  const novoCrime = await crimeService.createCrime({ nome, descricao });
  return novoCrime;
}

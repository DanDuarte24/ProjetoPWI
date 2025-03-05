import denunciaService from '../services/denunciaService';

/**
 * Caso de uso: Registrar uma nova denúncia.
 * Verifica se o crime associado existe (essa validação já está implementada no service) e cria a denúncia.
 * @param crimeId - Identificador do crime associado.
 * @param descricao - Descrição da denúncia.
 * @param nomeDenunciante - Nome do denunciante.
 * @returns A denúncia recém-criada.
 */
export async function registrarDenunciaUseCase(crimeId: number, descricao: string, nomeDenunciante: string) {
  // Validações ou regras adicionais podem ser incluídas aqui.
  if (!crimeId || !descricao || !nomeDenunciante) {
    throw new Error('crimeId, descrição e nome do denunciante são obrigatórios para registrar uma denúncia.');
  }
  const novaDenuncia = await denunciaService.createDenuncia({ crimeId, descricao, nomeDenunciante });
  return novaDenuncia;
}

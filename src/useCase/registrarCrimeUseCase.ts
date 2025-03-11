import crimeService from '../services/crimeService';

/**
 * Caso de uso: Registrar um novo crime.
 * @param nome - Nome do crime.
 * @param descricao - Descrição do crime.
 * @param endereco - Endereço do crime.
 * @param coordenadas - Coordenadas (lat, lng).
 * @returns O crime recém-criado.
 */
export async function registrarCrimeUseCase(
  nome: string,
  descricao: string,
  endereco: string,
  coordenadas: { lat: number; lng: number; }
) {
  if (!nome || !descricao || !endereco || !coordenadas || coordenadas.lat === undefined || coordenadas.lng === undefined) {
    throw new Error('Nome, descrição, endereço e coordenadas são obrigatórios para registrar um crime.');
  }
  const localizacao = { endereco, coordenadas };
  const novoCrime = await crimeService.createCrime({ nome, descricao, localizacao });
  return novoCrime;
}

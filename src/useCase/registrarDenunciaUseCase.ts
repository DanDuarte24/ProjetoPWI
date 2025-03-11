// useCases/denunciaUseCase.ts (ou outro local onde esteja o caso de uso)
import denunciaService from '../services/denunciaService';

/**
 * Caso de uso: Registrar uma nova denúncia.
 * @param crimeId - Identificador do crime associado.
 * @param descricao - Descrição da denúncia.
 * @returns A denúncia recém-criada.
 */
export async function registrarDenunciaUseCase(
  crimeId: number,
  descricao: string
) {
  if (!crimeId || !descricao) {
    throw new Error('crimeId e descrição são obrigatórios para registrar uma denúncia.');
  }
  // Para denúncias anônimas, definimos o nome como "Anônimo"
  // e definimos uma localização padrão (por exemplo, sem endereço e coordenadas zeradas)
  const defaultLocalizacao = {
    endereco: 'Não informado',
    coordenadas: { lat: 0, lng: 0 }
  };
  const novaDenuncia = await denunciaService.createDenuncia({
    crimeId,
    descricao,
    nomeDenunciante: 'Anônimo',
    localizacao: defaultLocalizacao
  });
  return novaDenuncia;
}

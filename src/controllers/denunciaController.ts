import { Request, Response, NextFunction } from 'express';
import denunciaService from '../services/denunciaService.js';

export const criarDenuncia = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { crimeId, descricao, nomeDenunciante, endereco, coordenadas } = req.body;
    if (
      !crimeId || 
      !descricao || 
      !nomeDenunciante || 
      !endereco || 
      !coordenadas || 
      coordenadas.lat === undefined || 
      coordenadas.lng === undefined
    ) {
      return res.status(400).json({ 
        mensagem: 'crimeId, descrição, nome do denunciante, endereço e coordenadas (lat, lng) são obrigatórios' 
      });
    }
    const localizacao = { endereco, coordenadas };
    const denuncia = await denunciaService.createDenuncia({ crimeId, descricao, nomeDenunciante, localizacao });
    res.status(201).json(denuncia);
  } catch (error: any) {
    next(error);
  }
};

export const listarDenuncias = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const denuncias = await denunciaService.getAllDenuncias();
    res.json(denuncias);
  } catch (error: any) {
    next(error);
  }
};

export const obterDenuncia = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const denuncia = await denunciaService.getDenunciaById(id);
    res.json(denuncia);
  } catch (error: any) {
    res.status(404).json({ mensagem: error.message });
  }
};

export const atualizarDenuncia = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const { descricao, nomeDenunciante } = req.body;
    const denuncia = await denunciaService.updateDenuncia(id, { descricao, nomeDenunciante });
    res.json(denuncia);
  } catch (error: any) {
    res.status(404).json({ mensagem: error.message });
  }
};

export const deletarDenuncia = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    await denunciaService.deleteDenuncia(id);
    res.status(204).send();
  } catch (error: any) {
    res.status(404).json({ mensagem: error.message });
  }
};

export const listarDenunciasPorCrime = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const crimeId = Number(req.params.crimeId);
    const denuncias = await denunciaService.getDenunciasByCrimeId(crimeId);
    res.json(denuncias);
  } catch (error: any) {
    next(error);
  }
};

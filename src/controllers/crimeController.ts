import { Request, Response, NextFunction } from 'express';
import crimeService from '../services/crimeService.js';

export const criarCrime = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { nome, descricao, endereco, coordenadas } = req.body;
    if (!nome || !descricao || !endereco || !coordenadas || coordenadas.lat === undefined || coordenadas.lng === undefined) {
      return res.status(400).json({ 
        mensagem: 'Nome, descrição, endereço e coordenadas (lat, lng) são obrigatórios' 
      });
    }
    const localizacao = { endereco, coordenadas };
    const crime = await crimeService.createCrime({ nome, descricao, localizacao });
    res.status(201).json(crime);
  } catch (error: any) {
    next(error);
  }
};

export const listarCrimes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const crimes = await crimeService.getAllCrimes();
    res.json(crimes);
  } catch (error: any) {
    next(error);
  }
};

export const obterCrime = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const crime = await crimeService.getCrimeById(id);
    res.json(crime);
  } catch (error: any) {
    res.status(404).json({ mensagem: error.message });
  }
};

export const atualizarCrime = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const { nome, descricao } = req.body;
    const crime = await crimeService.updateCrime(id, { nome, descricao });
    res.json(crime);
  } catch (error: any) {
    res.status(404).json({ mensagem: error.message });
  }
};

export const deletarCrime = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    await crimeService.deleteCrime(id);
    res.status(204).send();
  } catch (error: any) {
    res.status(404).json({ mensagem: error.message });
  }
};

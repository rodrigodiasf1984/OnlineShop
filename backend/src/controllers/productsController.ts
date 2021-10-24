import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Products from '../models/Products';

export default {
  async create(req: Request, res: Response) {
    const { name, description, price, image } = req.body;
    const productsRepository = getRepository(Products);

    const product = productsRepository.create({
      name,
      description,
      price,
      image,
    });

    await productsRepository.save(product);
    return res.status(201).json(product);
  },
};

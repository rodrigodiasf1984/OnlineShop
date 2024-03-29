/* eslint-disable no-console */
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import Product from '../models/Product';
import productsView from '../view/products_view';

export default {
  async index(_req: Request, res: Response) {
    const productsRepository = getRepository(Product);
    const products = await productsRepository.find({
      order: { name: 'ASC' },
      relations: ['image'],
    });
    return res.json(productsView.renderMany(products));
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const productsRepository = getRepository(Product);
    const product = await productsRepository.findOneOrFail(id, {
      relations: ['image'],
    });
    return res.json(productsView.render(product));
  },

  async create(req: Request, res: Response) {
    const { name, description, price } = req.body;
    const productRepository = getRepository(Product);
    const requestImage = req.file;
    const image = { path: requestImage?.filename };

    console.log('requestImage', req.file);

    const data = {
      name,
      description,
      price,
      image,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required().max(300),
      price: Yup.number().required(),
      image: Yup.object().shape({
        path: Yup.string().required(),
      }),
    });

    await schema.validate(data, { abortEarly: false });

    const product = productRepository.create(data);

    await productRepository.save(product);

    return res.status(201).json(product);
  },
};

import { Router } from 'express';
import productsController from './controllers/productsController';

import products from './products';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('Welcome to our online shop API...');
});

routes.get('/products', (req, res) => {
  return res.json({ products });
});

routes.post('/products', productsController.create);

export default routes;

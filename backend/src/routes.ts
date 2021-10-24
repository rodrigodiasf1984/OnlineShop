import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import ProductsController from './controllers/productsController';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/product', upload.single('image'), ProductsController.create);
routes.get('/products', ProductsController.index);
routes.get('/product/:id', ProductsController.show);

export default routes;

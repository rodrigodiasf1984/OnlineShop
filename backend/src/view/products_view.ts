import Product from '../models/Product';
import imagesView from './images_view';

export default {
  render(product: Product) {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.description,
      image: imagesView.render(product.image),
    };
  },

  renderMany(products: Product[]) {
    return products.map(product => this.render(product));
  },
};

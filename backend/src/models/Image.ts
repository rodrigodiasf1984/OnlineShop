import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

import Product from './Product';

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @OneToOne(() => Product, product => product.image)
  product: Product;
}

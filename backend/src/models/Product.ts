import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import Image from './Image';

@Entity('products')
export default class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @OneToOne(() => Image, image => image.product, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'image_id' })
  image: Image;
}

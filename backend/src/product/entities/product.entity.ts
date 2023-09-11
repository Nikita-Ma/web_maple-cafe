import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
export class Products {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  label: string;
  @Column()
  image: string;
  @Column()
  description: string;
  @Column()
  nowPrice: number;
  @Column()
  oldPrice: number;
  @Column()
  date: Date;
}

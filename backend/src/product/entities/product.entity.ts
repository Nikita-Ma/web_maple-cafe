import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, UpdateDateColumn } from 'typeorm';
import { Category } from '../../category/entities/category.entity';

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
  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
  @CreateDateColumn()
  createdDate: Date;
  @UpdateDateColumn()
  updateDate: Date;
}

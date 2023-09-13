import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Users } from '../../auth/entities/users.entity';
import { Products } from '../../product/entities/product.entity';
import { IsNumber, IsString } from 'class-validator';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  qwe: number;

  @Column({ default: 'В обработке' })
  status: string;

  @ManyToOne(() => Users, (users) => users.orders)
  user: Users;

  @ManyToOne(() => Products, (products) => products.id)
  products: Products[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}

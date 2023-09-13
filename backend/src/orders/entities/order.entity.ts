import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Users } from '../../auth/entities/users.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  qwe: number;

  @Column({ default: 'В обработке' })
  status: string;

  @ManyToOne(() => Users, (users) => users.orders)
  user: Users;

  @Column()
  products: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}

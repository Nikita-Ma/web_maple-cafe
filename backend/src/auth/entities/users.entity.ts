import { Entity, Column, PrimaryGeneratedColumn, Unique, CreateDateColumn, OneToMany } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';

@Entity('users')
@Unique(['telephone'])
export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  password: string;
  @Column({ default: 'user' })
  status: string;
  @Column()
  telephone: string;
  @Column({ unique: true })
  email: string;
  @Column({ default: false })
  banned: boolean;

  @Column({ default: 0 })
  restMoney: number;
  @OneToMany(() => Order, order => order.user)
  orders: Order[];
  @CreateDateColumn()
  date: Date;
}

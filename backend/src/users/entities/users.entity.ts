import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
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
  @Column()
  email: string;
  @Column({ default: false })
  banned: boolean;
  @Column()
  orders: number;
  @Column({ default: 0 })
  restMoney: number;
  @Column({ type: 'timestamptz' }) // Recommended
  date_time_with_timezone: Date;
}

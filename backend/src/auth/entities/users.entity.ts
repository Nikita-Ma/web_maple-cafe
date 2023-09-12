import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

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
  @Column({ nullable: true })
  orders: number;
  @Column({ default: 0 })
  restMoney: number;
  @Column({ nullable: true, type: 'timestamptz' }) // Recommended
  date: Date;
}

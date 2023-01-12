import { BaseEntity } from 'src/infrastructures/entity/base.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @Column({ default: false, name: 'is_admin' })
  isAdmin: boolean;
}
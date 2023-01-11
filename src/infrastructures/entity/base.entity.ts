import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Base_Entity {

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column()
  deleted_at: Date;
}
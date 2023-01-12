import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class BaseEntity {

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @Column({nullable : true})
  updated_at: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at: Date;
}
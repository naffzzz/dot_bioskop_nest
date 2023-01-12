import { Base_Entity } from 'src/infrastructures/entity/base.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tags extends Base_Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
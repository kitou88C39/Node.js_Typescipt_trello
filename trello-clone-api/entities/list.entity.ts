import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class list {
  @PrimaryGeneratedColumn()
  id!: number;
}

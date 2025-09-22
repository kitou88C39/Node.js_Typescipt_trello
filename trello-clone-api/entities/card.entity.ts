import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import UpdateDateColumn = require('typeorm');
import CreateDateColumn = require('typeorm');

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title!: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column()
  position!: number;

  @Column({ default: false })
  completed: boolean = false;

  @Column({ nullable: true })
  dueDate?: Date;

  @Column()
  listId!: number;

  @OneToMany(() => List, (list) => list.list, { onDelete: 'CASCADE' })
  list?: List[];

  @CreateDateColumn()
  readonly createdDate?: Date;

  @UpdateDateColumn()
  readonly updatedDate?: Date;
}

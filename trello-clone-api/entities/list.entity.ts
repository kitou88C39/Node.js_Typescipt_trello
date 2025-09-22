import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class list {
  @PrimaryGeneratedColumn()
  id!: number;

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

  @CreateDateColumn()
  readonly createdDate?: Date;

  @UpdateDateColumn()
  readonly updatedDate?: Date;
}

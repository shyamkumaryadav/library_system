import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('issue')
class ISSUE {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'date',
  })
  due_date!: Date;

  @Column()
  remark!: string;

  // Issue hasOne Book
  @Column()
  book!: string;

  // Issue hasOne User
  @Column()
  user?: string;
}

export default ISSUE;

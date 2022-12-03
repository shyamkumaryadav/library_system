import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('issue')
class ISSUE extends BaseEntity {
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

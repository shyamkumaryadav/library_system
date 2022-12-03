import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('book')
class BOOK extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  uid!: string;

  @Column()
  name!: string;

  @Column()
  author!: string;

  @Column()
  publisher!: string;

  @Column()
  genre!: string;

  @Column({
    type: 'numeric',
  })
  price!: number;
}

export default BOOK;

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('book')
class BOOK {
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

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "./Author";

@Entity()
export class Book {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Author, author => author.books, {
    cascade: true
  })
  author: Author;

  @Column()
  title: string;

  @Column()
  price: number;
}

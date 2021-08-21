import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Book } from "./Book";
import { Name } from "./Name";

@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column(() => Name)
    name: Name;

    @OneToMany(() => Book, book => book.author)
    books: Book[];

}

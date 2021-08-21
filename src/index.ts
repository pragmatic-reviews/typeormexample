import "reflect-metadata";
import {createConnection} from "typeorm";
import { Book } from "./entity/Book";
import { Name } from "./entity/Name";
import { Author } from "./entity/Author";

createConnection().then(async connection => {
    const name = new Name();
    name.first = "Robert";
    name.last = "Martin";

    const author = new Author();
    author.name = name;

    const book = new Book();
    book.title = "Clean Code";
    book.author = author;
    book.price = 33;

    const bookRepository = connection.getRepository(Book);
    await bookRepository.save(book);

}).catch(error => console.log(error));

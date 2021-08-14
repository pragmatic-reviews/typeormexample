import "reflect-metadata";
import {createConnection} from "typeorm";
import { Book } from "./entity/Book";
import { Pen } from "./entity/Pen";

createConnection().then(async connection => {

    const book = new Book();
    book.name = "Clean Code First Edition";
    book.title = "Clean Code";
    book.author = "Robert C. Martin";
    book.price = 33;

    const pen = new Pen();
    pen.name = "Blue pen";
    pen.color = "blue";
    pen.price = 2;

    const bookRepository = connection.getRepository(Book);
    await bookRepository.save(book);

    const penRepository = connection.getRepository(Pen);
    await penRepository.save(pen);

}).catch(error => console.log(error));

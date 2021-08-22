import "reflect-metadata";
import {createConnection} from "typeorm";
import { Book } from "./entity/Book";
import { Name } from "./entity/Name";
import { Author } from "./entity/Author";
import { Audit } from "./entity/Audit";

createConnection().then(async connection => {
    const name = new Name();
    name.first = "Robert";
    name.last = "Martin";

    const audit = new Audit();
    audit.created_by = "user1";
    audit.created_on = new Date();
    audit.updated_by = "user2";
    audit.updated_on = new Date();

    const author = new Author();
    author.name = name;

    const book = new Book();
    book.title = "Clean Code";
    book.author = author;
    book.price = 33;
    book.audit = audit;

    const bookRepository = connection.getRepository(Book);
    await bookRepository.save(book);

}).catch(error => console.log(error));

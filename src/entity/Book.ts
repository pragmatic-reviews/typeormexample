import { ChildEntity, Column } from "typeorm";
import { Product } from "./Product";

@ChildEntity()
export class Book extends Product {
  @Column()
  author: string;

  @Column()
  title: string;
}

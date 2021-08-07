import { Column, Entity } from "typeorm";
import { Product } from "./Product";

@Entity()
export class Book extends Product {
  @Column()
  author: string;

  @Column()
  title: string;
}

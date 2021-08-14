import { ChildEntity, Column } from "typeorm";
import { Product } from "./Product";

@ChildEntity()
export class Pen extends Product {
  @Column()
  color: string;
}

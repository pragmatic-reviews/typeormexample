import { Column, PrimaryGeneratedColumn } from "typeorm";

export abstract class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;
}

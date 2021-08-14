import { Column, Entity, PrimaryGeneratedColumn, TableInheritance } from "typeorm";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;
}

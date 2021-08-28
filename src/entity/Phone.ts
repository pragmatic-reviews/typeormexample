import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Phone extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phoneNumber: number;
}

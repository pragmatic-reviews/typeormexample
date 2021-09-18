import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Phone } from "./Phone";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(() => Phone, phone => phone.user, {
      cascade: true
    })
    phones: Phone[];
}

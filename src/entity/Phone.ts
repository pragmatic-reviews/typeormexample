import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity()
export class Phone {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phoneNumber: number;

  @ManyToOne(() => User, user => user.phones)
  user: User;
}

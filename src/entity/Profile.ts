import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Profile {

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  gender: string;

  @Column()
  photo: string;

  @OneToOne(() => User, user => user.profile) // specify inverse side as a second parameter
  user: User;
}
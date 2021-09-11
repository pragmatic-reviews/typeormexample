import { AfterInsert, BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Phone {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  countryCode: number;

  @Column()
  phoneNumber: number;

  @ManyToOne(() => User, user => user.phones)
  user: User;

  @BeforeInsert()
  updatePrefix() {
    console.log("BEFORE PHONE INSERTED");
    this.countryCode = 1;
  }

  @AfterInsert()
  showPhone() {
    console.log("AFTER PHONE INSERTED: ", this.countryCode, this.phoneNumber);
  }
}

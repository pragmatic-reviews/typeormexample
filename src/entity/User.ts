import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany} from "typeorm";
import { Phone } from "./Phone";
import { Profile } from "./Profile";

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

    @OneToOne(() => Profile,  profile => profile.user, {
      cascade: true
    })
    @JoinColumn()
    profile: Profile;

    @OneToMany(() => Phone, phone => phone.user, {
      cascade: true
    })
    phones: Phone[];

    addPhone(phone: Phone) {
      if(this.phones == null) {
        this.phones = new Array<Phone>();
      }
      this.phones.push(phone);
    }
}

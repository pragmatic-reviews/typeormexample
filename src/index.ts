import "reflect-metadata";
import {createConnection} from "typeorm";
import { Phone } from "./entity/Phone";
import {User} from "./entity/User";

createConnection().then(async connection => {

    /*console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "John";
    user.lastName = "Doe";
    user.age = 26;

    const phone = new Phone();
    phone.phoneNumber = 12345678;

    user.addPhone(phone);
    */
    const userRepository = connection.getRepository(User);

    //await userRepository.save(user);

    const users = await userRepository.find();

    console.log("Loaded users: ", users);
    
    users.forEach(user => {
      console.log("Phones: ", user.phones);
    });


}).catch(error => console.log(error));

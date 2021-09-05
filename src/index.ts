import "reflect-metadata";
import {createConnection} from "typeorm";
import { Phone } from "./entity/Phone";
import {User} from "./entity/User";

createConnection().then(async connection => {

    /*const user = new User();
    user.firstName = "John";
    user.lastName = "Doe";
    user.age = 26;

    const phone = new Phone();
    phone.phoneNumber = 12345678;

    user.phones = Promise.resolve([phone]);*/

    const userRepository = connection.getRepository(User);

    //await userRepository.save(user);

    const users = await userRepository.find();

    console.log("Loaded users without phones: ", users);

    const phones = await users[0].phones;
    
    console.log("Phones: ", phones );

}).catch(error => console.log(error));

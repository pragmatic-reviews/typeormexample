import "reflect-metadata";
import {createConnection} from "typeorm";
import { Phone } from "./entity/Phone";
import {User} from "./entity/User";

createConnection().then(async connection => {

    // Data Mapper
    const user = new User();
    user.firstName = "John";
    user.lastName = "Doe";

    const userRepository = connection.getRepository(User);
    await userRepository.save(user);

    const users = await userRepository.find();

    console.log("Users: ", users);

    // Active Record
    const phone = new Phone();
    phone.phoneNumber = 12345678;
    phone.save();

    const phone1 = await Phone.findOne({ phoneNumber: 12345678 });

    console.log("Phone: ", phone1);

}).catch(error => console.log(error));

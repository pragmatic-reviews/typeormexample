import "reflect-metadata";
import {createConnection} from "typeorm";
import { Community } from "./entity/Community";
import { Phone } from "./entity/Phone";
import { Profile } from "./entity/Profile";
import {User} from "./entity/User";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "John";
    user.lastName = "Doe";
    user.age = 26;

    const phone = new Phone();
    phone.phoneNumber = 12345678;

    user.addPhone(phone);

    const profile = new Profile();
    profile.gender = "M";
    profile.photo = "http://photos.google.com/images/2.png";

    user.profile = profile;

    const stackOverflow = new Community();
    stackOverflow.name = "StackOverflow";

    const github = new Community();
    github.name = "GitHub";

    user.addCommunity(stackOverflow);
    user.addCommunity(github);

    const userRepository = connection.getRepository(User);

    await userRepository.save(user);

    const users = await userRepository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.profile", "profile")
      .leftJoinAndSelect("user.phones", "phones")
      .getMany();

    console.log("Loaded users: ", users);
    
    users.forEach(user => {
      console.log("Phones: ", user.phones);
    });


}).catch(error => console.log(error));

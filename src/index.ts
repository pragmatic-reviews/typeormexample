import "reflect-metadata";
import { createConnection } from "typeorm";
import { Phone } from "./entity/Phone";
import { User } from "./entity/User";

createConnection().then(async connection => {

  // INSERT USER
  await connection.createQueryBuilder()
                  .insert()
                  .into(User)
                  .values([
                    { firstName: "John", lastName: "Doe", age: 26 }
                  ])
                  .execute();

  // SELECT SINGLE USER
  const user = await connection.createQueryBuilder()
                               .select("user")
                               .from(User, "user")
                               .where("user.id = :id", { id: 1 })
                               .getOne();
  
  console.log("User from DB: ", user);

  // INSERT PHONE
  await connection.createQueryBuilder()
                  .insert()
                  .into(Phone)
                  .values([
                    { phoneNumber: 12345678 }
                  ])
                  .execute();
  
  // INSERT RELATION PHONE AND USER                
  await connection.createQueryBuilder()
                  .relation(User, "phones")
                  .of(user)
                  .add({ id: 1});

  // SELECT USER LEFT JOIN PHONE
  const users = await connection.createQueryBuilder()
                                .select("user")
                                .from(User, "user")
                                .leftJoinAndSelect("user.phones", "phones")
                                .getMany();

  console.log("Users from DB: ", users);

}).catch(error => console.log(error));

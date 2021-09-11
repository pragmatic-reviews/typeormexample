import { EntitySubscriberInterface, EventSubscriber, InsertEvent } from "typeorm";
import { User } from "../entity/User";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {

    /**
     * Indicates that this subscriber only listen to User events.
     */
    listenTo() {
      return User;
    }

    /**
     * Called after entity is loaded.
     */
    afterLoad(entity: User) {
      console.log(`AFTER USER LOADED: `, entity);
    }

    /**
     * Called before user insertion.
     */
    beforeInsert(event: InsertEvent<User>) {
      console.log(`BEFORE USER INSERTED: `, event.entity);
    }

}
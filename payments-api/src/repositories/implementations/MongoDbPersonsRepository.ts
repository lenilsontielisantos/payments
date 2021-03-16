import { Person } from "../../entities/Person";
import { IPersonsRepository } from "../IPersonsRepository";

export class MongoDbPersonsRepository implements IPersonsRepository{

    async findAll(): Promise<Person> {
        return null;
    }

}
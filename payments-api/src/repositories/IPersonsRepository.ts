import { Person } from "../entities/Person";

export interface IPersonsRepository {
    findAll(): Promise<Person>
}
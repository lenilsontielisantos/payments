import { Person } from "../../entities/Person";
import { IPersonsRepository } from "../IPersonsRepository";

export class MongoDbPersonsRepository implements IPersonsRepository{

    async findAll(): Promise<Person> {
        //Devolver essa lista:
        /**
         * [
        {"id": 1, "name": "Raphael Gomes da Silva", "amount": 2000.59, "since": "2020-03-09"},
        {"id": 2, "name": "Savio Santos Amaral", "amount": 1543.98, "since": "2020-04-10"},
        {"id": 3, "name": "Ricardo Franco", "amount": 532.98, "since": "2020-11-05"},
        {"id": 4, "name": "Maria Aparecida de Lima", "amount": 760.54, "since": "2020-06-27"},
        {"id": 5, "name": "Lilian Teixeira de Freitas", "amount": 952.90, "since": "2020-07-07"},
        {"id": 6, "name": "Marcos Peixoto", "amount": 5002.09, "since": "2020-06-01"},
        {"id": 7, "name": "Hugo Oliveira", "amount": 857.32, "since": "2020-11-09"},
        {"id": 8, "name": "Denise da Silva", "amount": 1332.22, "since": "2020-11-02"},
        {"id": 9, "name": "Paulo Roberto Campos", "amount": 8429.43, "since": "2020-10-10"},
        {"id": 10, "name": "Ricardo Damasceno", "amount": 913.43, "since": "2020-05-07"},
        {"id": 12, "name": "Raquel Siqueira", "amount": 831.11, "since": "2020-03-06"},
        {"id": 13, "name": "Pablo Batista", "amount": 943.17, "since": "2021-02-05"},
        {"id": 14, "name": "Solange Amaral Gonçalves", "amount": 100.00, "since": "2021-03-15"},
        {"id": 15, "name": "Amanda Lima de Souza", "amount": 45.71, "since": "2021-03-14"}
]
         */
        return null;
    }

}
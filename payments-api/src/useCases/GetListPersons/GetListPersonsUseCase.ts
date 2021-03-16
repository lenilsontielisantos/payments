import { IPersonsRepository } from "../../repositories/IPersonsRepository";
import { IGetListPersonsResponseToDTO } from "./GetListPersonsDTO";

export class GetListPersonsUseCase {

    constructor(private personsRepository: IPersonsRepository) {}

    async execute() {
        await this.personsRepository.findAll()
    }
}
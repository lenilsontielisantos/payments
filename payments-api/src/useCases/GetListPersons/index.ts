import { MongoDbPersonsRepository } from "../../repositories/implementations/MongoDbPersonsRepository"
import { GetListPersonsController } from "./GetListPersonsController"

import { GetListPersonsUseCase } from "./GetListPersonsUseCase"

const mongoDbPersonsRepository = new MongoDbPersonsRepository()
const getListPersonsUseCase = new GetListPersonsUseCase(mongoDbPersonsRepository)
const getListPersonsController = new GetListPersonsController(getListPersonsUseCase)

export { getListPersonsController, getListPersonsUseCase }
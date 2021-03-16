import { request, Router } from "express";
import { getListPersonsController } from "./useCases/GetListPersons";

const router = Router()

router.get('payments', (request, response) => {
    return getListPersonsController.handle(request, response)
})

export { router }
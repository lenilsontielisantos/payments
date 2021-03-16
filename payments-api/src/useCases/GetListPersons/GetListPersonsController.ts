import { Request, Response } from "express";
import { GetListPersonsUseCase } from "./GetListPersonsUseCase";

export class GetListPersonsController {

    constructor(private getListPersonsUseCase: GetListPersonsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.getListPersonsUseCase.execute()
        } catch(err) {
            return response.status(500).json({
                message: err.message || 'Falha ao obter registros do banco de dados'
            })
        }
        
    }
}
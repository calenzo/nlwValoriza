import { Request, Response } from "express";
import { CreateTagServices } from "../services/CreateTagServices";

class CreateTagController {

    async handle(request: Request, response: Response) {

        const { name } = request.body;

        const createTagServices = new CreateTagServices();

        const tag = await createTagServices.execute(name);

        return response.json(tag);
    }
}

export { CreateTagController }